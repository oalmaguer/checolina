import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss',
})
export class PreviewComponent {
  constructor(private appService: AppService, private router: Router) {}
  previewData: any = {};
  previewImage: any = {};
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.appService.previewData$.subscribe((data) => {
      this.previewData = data;
    });
    this.appService.previewImage$.subscribe((data) => {
      this.previewImage = data;
    });
  }

  goBack() {
    this.router.navigate(['/create']);
  }
}
