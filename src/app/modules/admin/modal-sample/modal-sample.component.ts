

import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import _ from 'lodash';

@Component({
    selector: 'app-modal-sample',
    templateUrl: './modal-sample.component.html',
    styleUrls: ['./modal-sample.component.scss']
})
export class ModalSampleComponent implements OnInit {
  branchForm: FormGroup;
  branches: any[];

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) _data: { branches },
    public matDialogRef: MatDialogRef<ModalSampleComponent>
  ) {

    this.branches = _data.branches; 
    this.branchForm = this.fb.group({
      branch: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
   
  }


 


  onSave() {
    this.branchForm.reset();
    this.matDialogRef.close();
  }


}
