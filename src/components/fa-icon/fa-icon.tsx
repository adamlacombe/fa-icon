import { IconName } from '@fortawesome/fontawesome-common-types';
import { icon, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Component, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'fa-icon',
  styleUrl: 'fa-icon.css',
  scoped: true
})
export class FaIcon {

  /**
   * The icon prefix.
   */
  @Prop() type: 'fas' | 'far' | 'fab';

  /**
   * The name of the icon.
   */
  @Prop() name: IconName;

  /**
   * The size of the icon.
   */
  @Prop() size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' = 'small';

  @State() svg: any;

  componentWillLoad() {
    library.add(fas, far, fab);
    this.svg = icon({ prefix: this.type, iconName: this.name })?.html[0];
  }

  render() {
    return <Host class={{
      'size-x-small': (this.size === 'x-small'),
      'size-small': (this.size === 'small'),
      'size-medium': (this.size === 'medium'),
      'size-large': (this.size === 'large'),
      'size-x-large': (this.size === 'x-large'),
      'size-xx-large': (this.size === 'xx-large'),
    }}>
      <div innerHTML={this.svg} />
    </Host>;
  }
}
