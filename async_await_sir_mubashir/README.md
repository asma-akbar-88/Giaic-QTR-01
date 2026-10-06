# Async / Await - TypeScript Practice (Sir Mubashir)

Yeh project JavaScript/TypeScript main **asynchronous programming** seekhne ke liye hai — callbacks se start kar ke promises aur async/await tak.

---

## Topics (Har file ka kya hai)

### 1. `function.ts` — Functions & Types
Function ka basic concept: input dein, output lein.
- `add(a: number, b: number): number` → number return karta hai
- `greet(name: string): string` → string return karta hai
- `powerOutage(light: boolean): void` → kuch return nhi karta (sirf print)
- Object ka type bhi define hota hai (`type TPerson`)

> **Detail:** TypeScript main har function ka type (parameter + return) likhna parta hai — is se pata chalta hai function kya lega aur kya dega.

---

### 2. `call_back.ts` — Callback
**Callback** = koi aisa function jo dusre function ke *andar* pass kiya jaye, aur wo usse baad main call kare.

```ts
parentFunction(childFunction); // child ko callback ki tarah pass kiya
```

> **Detail:** Yeh kaam aise hi hota hai ke "kaam khatam ho jaye to yeh function chala dena". Lekin callbacks nested hone lag jaye to code mushkil parhta hai (**Callback Hell**).

---

### 3. `concurrency.ts` — setTimeout & Event Loop
`setTimeout(fn, ms)` ek kaam ko delay se karta hai.

```ts
console.log("welcome");
setTimeout(() => console.log("hi"), 1000);  // 1 sec baad
setTimeout(() => console.log("end"), 2000);  // 2 sec baad
```

> **Detail:** JavaScript main **event loop** hota hai jo setTimeout waghera ko queue main rakhta hai. Is liye pehle "welcome" print hota hai, phir 1 sec baad "hi", phir 2 sec baad "end". Yehi asal wajah hai ke asynchronous code alag tarike se chalta hai.

---

### 4. `callback_async.ts` — Callback ke sath Async kaam
Washing → Soaking → Drying — har step kaam khatam kar ke agla callback se start karta hai.

```ts
washing(() => {
    soaking(() => {
        drying();
    });
});
```

> **Detail:** Yeh **sequential execution** hai. Problem yeh ke nested callbacks ka pyramid ban jata hai — isi ka solution **Promise** hai.

---

### 5. `promise.ts` — Promise (Basic)
**Promise** ek object hai jo batata hai ke kaam *complete hua ya fail hua* aur uska result milega.

Teen states hoti hain:
| State | Matlab |
|---|---|
| **pending** | Abhi kaam chal raha hai |
| **fulfilled (resolve)** | Kaam ho gaya, result mil gaya |
| **rejected** | Kaam fail ho gaya, error mila |

```ts
const promise = new Promise((resolve, reject) => {
    reject("Fail.... !")   // ya resolve("Success")
});

promise.then((val) => console.log(val))   // success yahan
       .catch((err) => console.log(err)); // error yahan
```

> **Detail:** `.then()` success par chalta hai, `.catch()` error par. Is tarah error handling alag ho jati hai.

---

### 6. `new_promise.ts` — Promise Chaining
Ek ke baad ek kaam karna: `.then()` main agla promise return karo to chain ban jati hai.

```ts
washing()
    .then((value) => { console.log(value); return soaking(); })
    .then((value) => { console.log(value); return drying(); })
    .then((value) => { console.log(value); })
    .catch((error) => console.log(error))
    .finally(() => console.log("THE END"));
```

> **Detail:**
> - `.then()` → success ka agla step
> - `.catch()` → koi bhi step fail ho jaye to yahan aayega
> - `.finally()` → chale ya na chale hamesha chalta hai
>
> Yeh approach Callback Hell se bachata hai.

---

### 7. `async.ts` — async/await (Final Solution)
`async/await` promise likhne ka **sab se simple** tareeqa hai — jaise sync code likh rahe ho.

```ts
async function runWashingMachine() {
    try {
        const result1 = await washing();
        console.log(result1);
        const result2 = await soaking();
        console.log(result2);
        const result3 = await drying();
        console.log(result3);
    } catch (error) {
        console.log("Error aa gaya:", error);
    }
}
```

> **Detail:**
> - `async` → function hamesha promise return karta hai
> - `await` → promise resolve hone tak **ruko**, phir agla line chalao
> - `try/catch` → `.then/.catch` ki jagah error handling
>
> Is se code bilkul simple aur padhne main aasan ho jata hai.

---

## Summary (Kis cheez se kya milta hai)

```
Callback  →  Kaam khatam to function chala do (nested ho sakta hai)
Promise   →  Resolve/Reject ka result, .then/.catch se handle
Chaining  →  Ek promise ke baad agla, pyramid avoid
async/await → Promise ko simple sync jaisa likho + try/catch
```

## Chalane ka tareeqa

```bash
npx tsc          # sab .ts files compile → .js
node async.js    # koi bhi file run karo
```
