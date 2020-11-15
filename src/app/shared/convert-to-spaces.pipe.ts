import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {

    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }
}