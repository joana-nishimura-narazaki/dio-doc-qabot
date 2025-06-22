import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatComponent }              from './chat.component';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChatComponent ]   // registra o componente standalone
    })
    .compileComponents();

    fixture   = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
