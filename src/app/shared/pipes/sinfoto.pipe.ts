import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(image : any): any {
    let noimage = 'noimage.png';

    if(!image){
      return noimage;
    }
  }

}
