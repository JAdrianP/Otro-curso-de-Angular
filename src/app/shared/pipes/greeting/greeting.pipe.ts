import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting'
})
export class GreetingPipe implements PipeTransform {

  transform(name: string, gender:string = 'M', role:string = 'user'): any {
    const welcome = (gender == 'F') ? 'Bienvenida' : 'Bienvenido';
    return `${welcome} ${name}, tienes permisos de ${role} `
  }

}
