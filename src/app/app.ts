import { Component }    from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule }  from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule        // <-- aqui!
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'dio-doc-qabot';
}
