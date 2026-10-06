# Student Functions (TypeScript)

Chhota sa TypeScript module jo student data par filter/find/map operations perform karta hai.

## Files

| File | Kaam |
|------|------|
| `student_type.ts` | `Student` aur `EntryTest` interfaces |
| `student_data.ts` | 10 sample students ka data (default export: `students`) |
| `get_function.ts` | Saare helper functions (exported) |
| `index.ts` | Entry point — har function call karke output print karta hai |
| `tsconfig.json` | TypeScript configuration |


## Functions

Saare functions `get_function.ts` mein hain aur export hain:

```ts
import {
    getAllStudents,
    getOnsiteStudents,
    getStudentById,
    getFailedStudents,
    getEmails,
} from "./get_function";
```

| Function | Return Type | Kya karta hai |
|----------|-------------|---------------|
| `getAllStudents()` | `Student[]` | Poora students array return karta hai |
| `getOnsiteStudents()` | `Student[]` | Sirf un students ko filter karta hai jahan `isOnsiteAllowed === true` |
| `getStudentById(rollNo)` | `Student \| undefined` | Diye gaye `rollNo` par student dhoondta hai (`find`) |
| `getFailedStudents()` | `Student[]` | Un students ko filter karta hai jinka `entryTest.isPassed === false` |
| `getEmails()` | `string[]` | Sab ke emails ka array banata hai (`map`) |

## Examples

```ts
// Sab students
getAllStudents();

// Onsite allowed students
getOnsiteStudents();

// Roll no 2003 ka student
getStudentById(2003);   // Sara Ahmed
getStudentById(9999);   // undefined

// Entry test fail hone wale
getFailedStudents();

// Saare emails
getEmails();
// [ "osama@test.com", "ali.khan@test.com", ... ]
```



## Expected Output

```
All Students: [ ... 10 students ... ]
Onsite Students: [ 7 students — rollNo 2001, 2002, 2004, 2005, 2007, 2009, 2010 ]
Student by Roll No 2003: { firstName: "Sara", lastName: "Ahmed", ... }
Failed Students: [ 3 students — rollNo 2003, 2006, 2008 ]
Emails: [ 'osama@test.com', 'ali.khan@test.com', ... ]
```


```

youtube: 
 https://www.youtube.com/live/DQUg4dO4PWI?si=PA1UH-IkFHDiwD67 ```