import { 
  createHTMLElement,
  range,
  random,
 } from '../utils';
import { IAnimation } from 'types';

class LogosFromCenterPerspectiveAnimation implements IAnimation {

  isLoaded: boolean = false;
  private parent: HTMLElement;
  private numberOfItems: number;
  private list: HTMLElement[] = [];
  private logo: HTMLElement;

  constructor(parent: HTMLElement, props: any) {
    this.parent = parent;
    this.numberOfItems = props.numberOfItems;

    this.logo = createHTMLElement(
      this.parent,
      'div',
      { id: props.id },
      { type: props.type, html: props.html }
    );

    this.isLoaded = true;
    this.createObjects();
  }

  createObjects() {
    range(0, this.numberOfItems).forEach(() => {
      const clone:HTMLElement = <HTMLElement>this.logo.cloneNode(true);
      this.list.push(clone);
      clone.style.top = `${50 + Math.round(random(0, 20)) - 10}%`;
      clone.style.left = `${50 + Math.round(random(0, 20)) - 10}%`;
      clone.style.animation = `z ${random(7, 14)}s linear ${random(0, 5)}s infinite`;
      this.parent.appendChild(clone);
    });
  }

  play() {
    this.list.forEach(element => {
      element.style.animation = `z ${random(7, 14)}s linear ${random(0, 5)}s infinite`;
    });
  }

  pause() {
    this.list.forEach(element => {
      element.style.animation = 'none';
    });
  }
}

export { LogosFromCenterPerspectiveAnimation };
