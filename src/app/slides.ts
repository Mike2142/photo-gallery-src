
import { AppComponent } from './app.component'


let timeGenerator = new AppComponent;

export const slides = [
  {
    imagePath: 'assets/image/img1.jpg',
    time: timeGenerator.generateTime(),
  },
  {
    imagePath: 'assets/image/img2.jpg',
    time: timeGenerator.generateTime(),
  },
  {
    imagePath: 'assets/image/img3.jpg',
    time: timeGenerator.generateTime(),
  },
  {
    imagePath: 'assets/image/img5.jpg',
    time: timeGenerator.generateTime(),
  },
  {
    imagePath: 'assets/image/img4.jpg',
    time: timeGenerator.generateTime(),
  },
  {
    imagePath: 'assets/image/img6.jpg',
    time: timeGenerator.generateTime(),
  },
];
