import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlockCategory } from './block-category';

describe('BlockCategory', () => {
  let component: BlockCategory;
  let fixture: ComponentFixture<BlockCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockCategory],
    }).compileComponents();

    fixture = TestBed.createComponent(BlockCategory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
