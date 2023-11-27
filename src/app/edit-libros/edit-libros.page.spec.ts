import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditLibrosPage } from './edit-libros.page';

describe('EditLibrosPage', () => {
  let component: EditLibrosPage;
  let fixture: ComponentFixture<EditLibrosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditLibrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
