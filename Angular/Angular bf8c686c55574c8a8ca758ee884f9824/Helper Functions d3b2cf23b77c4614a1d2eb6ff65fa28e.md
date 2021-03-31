# Helper Functions

## Generate a new module the right way

```bash
ng g module auth --route auth --module app.module
```

## Email validator

```tsx
import { FormControl } from '@angular/forms';

function validateEmail(c: FormControl) {
  let EMAIL_REGEXP = /\S+@\S+\.\S+/;

  return EMAIL_REGEXP.test(c.value) ? null : {
    validateEmail: {
      valid: false
    }
  };
}
```

## Search Pipe

```tsx
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform {
    transform(languages: string[], searchInput: string): any[]{     
        if(!searchInput) {
            return  [];
        }
       searchInput = searchInput.toLowerCase();
       return languages.filter(
           x =>x.toLowerCase().includes(searchInput)
       )
     }
}
```