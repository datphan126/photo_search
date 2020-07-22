import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../services/flickr.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
  public keyword: string;
  public photoList;

  constructor(
    private flickrService: FlickrService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  searchPhotos() {
    if(!this.keyword){
      this.snackBar.open('Please provide a keyword', 'Close', { duration: 2000 });
      return;
    }
    this.flickrService.searchPhotos(this.keyword).subscribe((result: any) =>{
      this.photoList = result.photos.photo;
    });
  }

  getPhotoURL(photo: any): string{
    return this.flickrService.getPhotoURL(photo);
  }
}
