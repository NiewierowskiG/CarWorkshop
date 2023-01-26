import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
describe('<App/>',()=>{
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   let appScreen; 

   beforeEach(() => {
             appScreen = shallow(<App/>);
   });

	   afterEach(() => {
             appScreen = undefined;
   }); 

it('renders', () => {
             const appScreen = shallow(<App/>);
             expect(appScreen.exists()).toBe(true);
}); 

});