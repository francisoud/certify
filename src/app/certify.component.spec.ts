import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CertifyAppComponent } from '../app/certify.component';

beforeEachProviders(() => [CertifyAppComponent]);

describe('App: Certify', () => {
  it('should create the app',
      inject([CertifyAppComponent], (app: CertifyAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'certify works!\'',
      inject([CertifyAppComponent], (app: CertifyAppComponent) => {
    expect(app.title).toEqual('certify works!');
  }));
});
