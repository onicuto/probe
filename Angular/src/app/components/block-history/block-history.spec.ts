import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlockHistory } from './block-history';

describe('BlockHistory', () => {
  let component: BlockHistory;
  let fixture: ComponentFixture<BlockHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockHistory],
    }).compileComponents();

    fixture = TestBed.createComponent(BlockHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
