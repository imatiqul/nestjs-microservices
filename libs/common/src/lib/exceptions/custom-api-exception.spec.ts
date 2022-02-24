import { CustomApiException } from './custom-api-exception';

describe('CustomApiException', () => {
  it('should be defined', () => {
    expect(new CustomApiException()).toBeDefined();
  });
});
