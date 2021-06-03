import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msj'
})
export class MsjPipe implements PipeTransform {

  transform(value: string): string {
    return this.wrap(value);
  }

  wrap(str: string): string {
    if (str) {
      return str
        .replace(/(?:\*)([^*]*)(?:\*)/gm, "<strong>$1</strong>")
        .replace(/(?:_)([^_]*)(?:_)/gm, "<i>$1</i>")
        .replace(/(?:~)([^~]*)(?:~)/gm, "<strike>$1</strike>")
    } else {
      return str;
    }
  }

}
