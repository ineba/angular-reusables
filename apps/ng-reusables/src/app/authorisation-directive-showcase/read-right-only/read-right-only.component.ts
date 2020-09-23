import { Component, Inject, OnInit } from '@angular/core';
import { AUTHORISATION_HANDLER } from '@nx-reusables/authorisation';
import { AuthorisationImplService } from '../../main/authorisation-impl.service';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-read-right-only',
  templateUrl: './access-rights.component.html',
  styleUrls: ['./access-rights.component.css'],
  providers: [
    {
      provide: 'ROLES',
      useValue: ['BIG_RED_BUTTON_READ'],
    },
    {
      provide: AUTHORISATION_HANDLER,
      useClass: AuthorisationImplService,
    },
  ],
})
export class ReadRightOnlyComponent implements OnInit {
  formControl = new FormControl('test');

  formGroup = this.formBuilder.group({
    testInput1: ['testInput1'],
    testInput2: ['testInput2'],
  });

  constructor(private auth: AuthorisationImplService, @Inject('ROLES') roles: string[], private formBuilder: FormBuilder) {
    this.auth.setRoles(roles);
  }

  ngOnInit(): void {}
}