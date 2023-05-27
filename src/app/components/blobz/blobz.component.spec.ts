import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlobzComponent } from './blobz.component';

describe('BlobzComponent', () => {
  let component: BlobzComponent;
  let fixture: ComponentFixture<BlobzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlobzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlobzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
