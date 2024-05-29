import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  public form = new FormGroup({
    name: new FormControl('', Validators.required),
    photo: new FormControl('', Validators.required),
    instagram: new FormControl('', Validators.required),
    facebook: new FormControl('', Validators.required),
    whatsapp: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  previewData: any = {};
  prevImage: any = {};
  constructor(private router: Router, private appService: AppService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.formChanges();
    this.appService.previewData$.subscribe((data) => {
      console.log(data);
      this.previewData = data;
    });

    this.setValues();
  }

  setValues() {
    if (this.previewData) {
      delete this.previewData.photo;
      this.form.patchValue(this.previewData);
    }
  }
  onImageSelect(image: any) {
    console.log('llega', image);
    console.log(this.form.value);
  }

  previewImage(event: any) {
    console.log('previewImage');
    var reader = new FileReader();
    let service = this.appService;
    reader.onload = function () {
      var output: any = document.getElementById('preview');
      output.src = reader.result;
      output.style.display = 'block';

      service.previewImage$.next(reader.result as string);
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  submit() {
    console.log(this.form.value);
    window.open(
      'https://pay.conekta.com/link/5fc63e0187524619a199c954a5cd2f7e',
      '_blank'
    );
  }

  preview() {
    this.router.navigate(['/preview']);
  }

  goBack() {
    this.router.navigate(['/']);
  }

  formChanges() {
    this.form.valueChanges.subscribe((data) => {
      this.appService.previewData$.next(data);
    });
  }
}
