import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

jest.mock('axios', async () => {
  let { AUTH_TOKEN } = await import('../Config/Config');
  return {
     defaults: {
        headers: {
           common: {
              Authorization: AUTH_TOKEN
           }
        }
     },
     get: jest.fn(() => Promise.resolve({ data: {} })),
     post: jest.fn(() => Promise.resolve({ data: {} }))
  };
});

describe('<App/>', () => {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   let appScreen: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
   let appInstance;
   beforeEach(() => {
      appScreen = shallow(<App />);
      appInstance = appScreen.instance();
      appInstance.setState({ items: [{ id: 1, name: 'item 1', price: 200, amount: 4 }, { id: 2, name: 'item 2', price: 200, amount: 4 }] });
   });

   afterEach(() => {
   });

   it('renders', () => {
      expect(appScreen!==undefined).toBe(true);
   });

   it('renders static structure', () => {
      expect(appScreen.first().type()).toBe(BrowserRouter);
   });

   

});