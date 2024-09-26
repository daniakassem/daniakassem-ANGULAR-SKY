import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true // This marks the pipe as standalone
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, search: string): any {
    if (!search) {
      return value;
    }
    const re = new RegExp(search, 'gi');
    return value.replace(re, (match) => `<mark class="highlighted">${match}</mark>`);
  }
}
