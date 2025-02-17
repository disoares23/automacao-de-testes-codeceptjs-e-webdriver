/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type register = typeof import('./pages/register.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, register: register }
  interface Methods extends WebDriver {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
