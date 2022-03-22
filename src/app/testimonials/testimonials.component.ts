import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../service/feedback.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements OnInit {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(private feedbackhttp: FeedbackService) {}

  ngOnInit(): void {
    this.getfeedbacks();
  }

  feedbacks!: any;

  getfeedbacks() {
    this.feedbackhttp.getstudfeedback().subscribe((res) => {
      this.feedbacks = res.filter(
        (o: { feedback: null }) => o.feedback !== null
      );
      // this.feedbacks = res;
      console.log(this.feedbacks);
    });
  }
}
