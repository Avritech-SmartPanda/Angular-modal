import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalSampleComponent } from '../modal-sample/modal-sample.component';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent
{
    branches = [
        {
            id   : '1',
            name : 'Branch 1'
        },
        {
            id   : '2',
            name : 'Branch 2'
        },
        {
            id   : '3',
            name : 'Branch 3'
        },
        {
            id   : '4',
            name : 'Branch 4'
        }
    ];

   
    
    /**
     * Constructor
     */
    constructor(private _matDialog: MatDialog,)
    {
    }

    addBranch(): void {
        this._matDialog.open(ModalSampleComponent, {
            autoFocus: true,
            disableClose: true,
            data: {
                branches: this.branches
            },
        });
    }
}
