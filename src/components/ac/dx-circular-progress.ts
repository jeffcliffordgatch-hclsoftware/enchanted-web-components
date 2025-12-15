/* ======================================================================== *
 * Copyright 2025 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */
// External imports
import { customElement, property } from 'lit/decorators.js';
import { html, css } from 'lit';

// Component imports
import { DxAcBaseElement } from '../ac/dx-ac-base-element';

/**
 * CircularProgress component - Indeterminate variant
 * Displays an animated circular progress indicator with track and progress colors
 * Based on Material UI's CircularProgress component
 */
@customElement('dx-circular-progress')
export class DxCircularProgress extends DxAcBaseElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .dx-circular-progress-root {
      display: inline-block;
      line-height: 1;
    }

    .dx-circular-progress-svg {
      display: block;
      animation: dx-circular-rotate 1.4s linear infinite;
    }

    .dx-circular-progress-track {
      opacity: 1;
    }

    .dx-circular-progress-circle {
      stroke-dasharray: 80px, 200px;
      stroke-dashoffset: 0;
      animation: dx-circular-dash 1.4s ease-in-out infinite;
    }

    .dx-circular-progress-circle.disable-shrink {
      animation: dx-circular-rotate 1.4s linear infinite;
    }

    @keyframes dx-circular-rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes dx-circular-dash {
      0% {
        stroke-dasharray: 1px, 200px;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 100px, 200px;
        stroke-dashoffset: -15px;
      }
      100% {
        stroke-dasharray: 100px, 200px;
        stroke-dashoffset: -125px;
      }
    }
  `;

  /**
   * Size of the circular progress in pixels
   * @default 40
   */
  @property({ type: Number }) size = 40;

  /**
   * Stroke width of the progress circle in pixels
   * @default 3.6
   */
  @property({ type: Number }) strokewidth = 3.6;

  /**
   * Color of the track (background circle)
   * @default 'rgba(0, 0, 0, 0.12)'
   */
  @property({ type: String }) trackcolor = '#D6D6D6'; // equivalent to $NG200 in ac.scss

  /**
   * Color of the progress indicator
   * @default '#1976d2'
   */
  @property({ type: String }) progresscolor = '#0550DC'; // equivalent to $HCLSOFTWAREBLUE06 in ac.scss

  /**
   * Disables the shrink animation for performance in high CPU load scenarios
   * @default false
   */
  @property({ type: Boolean }) disableshrink = false;

  /**
   * Get the circumference of the circle
   */
  private get circumference(): number {
    return 2 * Math.PI * this.radius;
  }

  /**
   * Get the radius of the circle
   */
  private get radius(): number {
    return (this.size - this.strokewidth) / 2;
  }

  /**
   * Get the viewBox size
   */
  private get viewBoxSize(): number {
    return this.size + this.strokewidth;
  }

  render() {
    const dashLength = this.disableshrink ? this.circumference * 0.8 : undefined;
    const dashGap = this.disableshrink ? this.circumference * 0.2 : undefined;

    return html`
      <div class="dx-circular-progress-root" style="width: ${this.size}px; height: ${this.size}px;">
        <svg
          class="dx-circular-progress-svg"
          viewBox="${this.viewBoxSize / 2} ${this.viewBoxSize / 2} ${this.viewBoxSize} ${this.viewBoxSize}"
        >
          <!-- Track circle (background) -->
          <circle
            class="dx-circular-progress-track"
            cx="${this.viewBoxSize}"
            cy="${this.viewBoxSize}"
            r="${this.radius}"
            fill="none"
            stroke="${this.trackcolor}"
            stroke-width="${this.strokewidth}"
          />
          <!-- Progress circle -->
          <circle
            class="dx-circular-progress-circle ${this.disableshrink ? 'disable-shrink' : ''}"
            cx="${this.viewBoxSize}"
            cy="${this.viewBoxSize}"
            r="${this.radius}"
            fill="none"
            stroke="${this.progresscolor}"
            stroke-width="${this.strokewidth}"
            stroke-dasharray="${dashLength !== undefined ? `${dashLength} ${dashGap}` : `${this.circumference * 0.8} ${this.circumference * 0.2}`}"
            stroke-dashoffset="0"
            stroke-linecap="round"
          />
        </svg>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dx-circular-progress': DxCircularProgress
  }
}
