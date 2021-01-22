import { css } from 'lit-element';

export default css`/*!
 * # Semantic UI - Button
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
.ui.button {
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  background: #e0e1e2 none;
  color: rgba(0,0,0,.6);
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  margin: 0 .25em 0 0;
  padding: .78571429em 1.5em .78571429em;
  text-transform: none;
  text-shadow: none;
  font-weight: 700;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: .28571429rem;
  box-shadow: 0 0 0 1px transparent inset,0 0 0 0 rgba(34,36,38,.15) inset;
  user-select: none;
  transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease;
  will-change: '';
  -webkit-tap-highlight-color: transparent
}
.ui.button:hover {
  background-color: #cacbcd;
  background-image: none;
  box-shadow: 0 0 0 1px transparent inset,0 0 0 0 rgba(34,36,38,.15) inset;
  color: rgba(0,0,0,.8)
}
.ui.button:hover ::slotted(.icon) {
  opacity: .85
}
.ui.button:focus {
  background-color: #cacbcd;
  color: rgba(0,0,0,.8);
  background-image: ''!important;
  box-shadow: ''!important
}
.ui.button:focus ::slotted(.icon) {
  opacity: .85
}
.ui.active.button:active,
.ui.button:active {
  background-color: #babbbc;
  background-image: '';
  color: rgba(0,0,0,.9);
  box-shadow: 0 0 0 1px transparent inset,none
}
.ui.active.button {
  background-color: #c0c1c2;
  background-image: none;
  box-shadow: 0 0 0 1px transparent inset;
  color: rgba(0,0,0,.95)
}
.ui.active.button:hover {
  background-color: #c0c1c2;
  background-image: none;
  color: rgba(0,0,0,.95)
}
.ui.active.button:active {
  background-color: #c0c1c2;
  background-image: none
}
.ui.loading.loading.loading.loading.loading.loading.button {
  position: relative;
  cursor: default;
  text-shadow: none!important;
  color: transparent!important;
  opacity: 1;
  pointer-events: auto;
  transition: all 0s linear,opacity .1s ease
}
.ui.loading.button:before {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  margin: -.64285714em 0 0 -.64285714em;
  width: 1.28571429em;
  height: 1.28571429em;
  border-radius: 500rem;
  border: .2em solid rgba(0,0,0,.15)
}
.ui.loading.button:after {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  margin: -.64285714em 0 0 -.64285714em;
  width: 1.28571429em;
  height: 1.28571429em;
  animation: button-spin .6s linear;
  animation-iteration-count: infinite;
  border-radius: 500rem;
  border-color: #fff transparent transparent;
  border-style: solid;
  border-width: .2em;
  box-shadow: 0 0 0 1px transparent
}
.ui.labeled.icon.loading.button ::slotted(.icon) {
  background-color: transparent;
  box-shadow: none
}
@keyframes button-spin {
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(360deg)
  }
}
.ui.basic.loading.button:not(.inverted):before {
  border-color: rgba(0,0,0,.1)
}
.ui.basic.loading.button:not(.inverted):after {
  border-top-color: #767676
}
.ui.button:disabled,
.ui.buttons .disabled.button,
.ui.disabled.active.button,
.ui.disabled.button,
.ui.disabled.button:hover {
  cursor: default;
  opacity: .45!important;
  background-image: none!important;
  box-shadow: none!important;
  pointer-events: none!important
}
.ui.basic.buttons .ui.disabled.button {
  border-color: rgba(34,36,38,.5)
}
.ui.animated.button {
  position: relative;
  overflow: hidden;
  padding-right: 0!important;
  vertical-align: middle;
  z-index: 1
}
.ui.animated.button .content {
  will-change: transform,opacity
}
.ui.animated.button ::slotted(.visible.content) {
  position: relative;
  margin-right: 1.5em
}
.ui.animated.button ::slotted(.hidden.content) {
  position: absolute;
  width: 100%
}
.ui.animated.button ::slotted(.hidden.content),
.ui.animated.button ::slotted(.visible.content) {
  transition: right .3s ease 0s
}
.ui.animated.button ::slotted(.visible.content) {
  left: auto;
  right: 0
}
.ui.animated.button ::slotted(.hidden.content) {
  top: 50%;
  left: auto;
  right: -100%;
  margin-top: -.5em
}
.ui.animated.button:focus ::slotted(.visible.content),
.ui.animated.button:hover ::slotted(.visible.content) {
  left: auto;
  right: 200%
}
.ui.animated.button:focus ::slotted(.hidden.content),
.ui.animated.button:hover ::slotted(.hidden.content) {
  left: auto;
  right: 0
}
.ui.vertical.animated.button ::slotted(.hidden.content),
.ui.vertical.animated.button ::slotted(.visible.content) {
  transition: top .3s ease,transform .3s ease
}
.ui.vertical.animated.button ::slotted(.visible.content) {
  transform: translateY(0);
  right: auto
}
.ui.vertical.animated.button ::slotted(.hidden.content) {
  top: -50%;
  left: 0;
  right: auto
}
.ui.vertical.animated.button:focus ::slotted(.visible.content),
.ui.vertical.animated.button:hover ::slotted(.visible.content) {
  transform: translateY(200%);
  right: auto
}
.ui.vertical.animated.button:focus ::slotted(.hidden.content),
.ui.vertical.animated.button:hover ::slotted(.hidden.content) {
  top: 50%;
  right: auto
}
.ui.fade.animated.button ::slotted(.hidden.content),
.ui.fade.animated.button ::slotted(.visible.content) {
  transition: opacity .3s ease,transform .3s ease
}
.ui.fade.animated.button ::slotted(.visible.content) {
  left: auto;
  right: auto;
  opacity: 1;
  transform: scale(1)
}
.ui.fade.animated.button ::slotted(.hidden.content) {
  opacity: 0;
  left: 0;
  right: auto;
  transform: scale(1.5)
}
.ui.fade.animated.button:focus ::slotted(.visible.content),
.ui.fade.animated.button:hover ::slotted(.visible.content) {
  left: auto;
  right: auto;
  opacity: 0;
  transform: scale(.75)
}
.ui.fade.animated.button:focus ::slotted(.hidden.content),
.ui.fade.animated.button:hover ::slotted(.hidden.content) {
  left: 0;
  right: auto;
  opacity: 1;
  transform: scale(1)
}
.ui.inverted.button {
  box-shadow: 0 0 0 2px #fff inset!important;
  background: transparent none;
  color: #fff;
  text-shadow: none!important
}
.ui.inverted.buttons ::slotted(.button) {
  margin: 0 0 0 -2px
}
.ui.inverted.buttons ::slotted(.button:first-child) {
  margin-left: 0
}
.ui.inverted.vertical.buttons ::slotted(.button) {
  margin: 0 0 -2px 0
}
.ui.inverted.vertical.buttons ::slotted(.button:first-child) {
  margin-top: 0
}
.ui.inverted.button:hover {
  background: #fff;
  box-shadow: 0 0 0 2px #fff inset!important;
  color: rgba(0,0,0,.8)
}
.ui.inverted.button.active,
.ui.inverted.button:focus {
  background: #fff;
  box-shadow: 0 0 0 2px #fff inset!important;
  color: rgba(0,0,0,.8)
}
.ui.inverted.button.active:focus {
  background: #dcddde;
  box-shadow: 0 0 0 2px #dcddde inset!important;
  color: rgba(0,0,0,.8)
}
.ui.labeled.button:not(.icon) {
  display: inline-flex;
  flex-direction: row;
  background: 0 0!important;
  padding: 0!important;
  border: none!important;
  box-shadow: none!important
}
.ui.labeled.button > ::slotted(.button) {
  margin: 0
}
.ui.labeled.button > ::slotted(.label) {
  display: flex;
  align-items: center;
  margin: 0 0 0 -1px!important;
  padding: '';
  font-size: 1em;
  border-color: rgba(34,36,38,.15)
}
.ui.labeled.button > .tag.label:before {
  width: 1.85em;
  height: 1.85em
}
.ui.labeled.button:not([class*='left labeled']) > ::slotted(.button) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0
}
.ui.labeled.button:not([class*='left labeled']) > ::slotted(.label) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0
}
.ui[class*='left labeled'].button > ::slotted(.button) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0
}
.ui[class*='left labeled'].button > ::slotted(.label) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0
}
.ui.facebook.button {
  background-color: #3b5998;
  color: #fff;
  text-shadow: none;
  background-image: none;
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.facebook.button:hover {
  background-color: #304d8a;
  color: #fff;
  text-shadow: none
}
.ui.facebook.button:active {
  background-color: #2d4373;
  color: #fff;
  text-shadow: none
}
.ui.twitter.button {
  background-color: #55acee;
  color: #fff;
  text-shadow: none;
  background-image: none;
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.twitter.button:hover {
  background-color: #35a2f4;
  color: #fff;
  text-shadow: none
}
.ui.twitter.button:active {
  background-color: #2795e9;
  color: #fff;
  text-shadow: none
}
.ui.google.plus.button {
  background-color: #dd4b39;
  color: #fff;
  text-shadow: none;
  background-image: none;
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.google.plus.button:hover {
  background-color: #e0321c;
  color: #fff;
  text-shadow: none
}
.ui.google.plus.button:active {
  background-color: #c23321;
  color: #fff;
  text-shadow: none
}
.ui.linkedin.button {
  background-color: #1f88be;
  color: #fff;
  text-shadow: none
}
.ui.linkedin.button:hover {
  background-color: #147baf;
  color: #fff;
  text-shadow: none
}
.ui.linkedin.button:active {
  background-color: #186992;
  color: #fff;
  text-shadow: none
}
.ui.youtube.button {
  background-color: red;
  color: #fff;
  text-shadow: none;
  background-image: none;
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.youtube.button:hover {
  background-color: #e60000;
  color: #fff;
  text-shadow: none
}
.ui.youtube.button:active {
  background-color: #c00;
  color: #fff;
  text-shadow: none
}
.ui.instagram.button {
  background-color: #49769c;
  color: #fff;
  text-shadow: none;
  background-image: none;
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.instagram.button:hover {
  background-color: #3d698e;
  color: #fff;
  text-shadow: none
}
.ui.instagram.button:active {
  background-color: #395c79;
  color: #fff;
  text-shadow: none
}
.ui.pinterest.button {
  background-color: #bd081c;
  color: #fff;
  text-shadow: none;
  background-image: none;
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.pinterest.button:hover {
  background-color: #ac0013;
  color: #fff;
  text-shadow: none
}
.ui.pinterest.button:active {
  background-color: #8c0615;
  color: #fff;
  text-shadow: none
}
.ui.vk.button {
  background-color: #4d7198;
  color: #fff;
  background-image: none;
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.vk.button:hover {
  background-color: #41648a;
  color: #fff
}
.ui.vk.button:active {
  background-color: #3c5876;
  color: #fff
}
.ui.button > ::slotted(.icon:not(.button)) {
  height: .85714286em;
  opacity: .8;
  margin: 0 .42857143em 0 -.21428571em;
  transition: opacity .1s ease;
  vertical-align: '';
  color: ''
}
.ui.button:not(.icon) > ::slotted(.icon:not(.button):not(.dropdown)) {
  margin: 0 .42857143em 0 -.21428571em
}
.ui.button:not(.icon) > ::slotted(.right.icon:not(.button):not(.dropdown)) {
  margin: 0 -.21428571em 0 .42857143em
}
.ui[class*='left floated'].button,
.ui[class*='left floated'].buttons {
  float: left;
  margin-left: 0;
  margin-right: .25em
}
.ui[class*='right floated'].button,
.ui[class*='right floated'].buttons {
  float: right;
  margin-right: 0;
  margin-left: .25em
}
.ui.compact.button,
.ui.compact.buttons ::slotted(.button) {
  padding: .58928571em 1.125em .58928571em
}
.ui.compact.icon.button,
.ui.compact.icon.buttons ::slotted(.button) {
  padding: .58928571em .58928571em .58928571em
}
.ui.compact.labeled.icon.button,
.ui.compact.labeled.icon.buttons ::slotted(.button) {
  padding: .58928571em 3.69642857em .58928571em
}
.ui.mini.button,
.ui.mini.buttons ::slotted(.button),
.ui.mini.buttons ::slotted(.or) {
  font-size: .78571429rem
}
.ui.tiny.button,
.ui.tiny.buttons ::slotted(.button),
.ui.tiny.buttons ::slotted(.or) {
  font-size: .85714286rem
}
.ui.small.button,
.ui.small.buttons ::slotted(.button),
.ui.small.buttons ::slotted(.or) {
  font-size: .92857143rem
}
.ui.button,
.ui.buttons ::slotted(.button),
.ui.buttons ::slotted(.or) {
  font-size: 1rem
}
.ui.large.button,
.ui.large.buttons ::slotted(.button),
.ui.large.buttons ::slotted(.or) {
  font-size: 1.14285714rem
}
.ui.big.button,
.ui.big.buttons ::slotted(.button),
.ui.big.buttons ::slotted(.or) {
  font-size: 1.28571429rem
}
.ui.huge.button,
.ui.huge.buttons ::slotted(.button),
.ui.huge.buttons ::slotted(.or) {
  font-size: 1.42857143rem
}
.ui.massive.button,
.ui.massive.buttons ::slotted(.button),
.ui.massive.buttons ::slotted(.or) {
  font-size: 1.71428571rem
}
.ui.icon.button,
.ui.icon.buttons ::slotted(.button) {
  padding: .78571429em .78571429em .78571429em
}
.ui.icon.button > ::slotted(.icon),
.ui.icon.buttons ::slotted(.button) > .icon {
  opacity: .9;
  margin: 0!important;
  vertical-align: top
}
.ui.basic.button,
.ui.basic.buttons ::slotted(.button) {
  background: transparent none!important;
  color: rgba(0,0,0,.6)!important;
  font-weight: 400;
  border-radius: .28571429rem;
  text-transform: none;
  text-shadow: none!important;
  box-shadow: 0 0 0 1px rgba(34,36,38,.15) inset
}
.ui.basic.buttons {
  box-shadow: none;
  border: 1px solid rgba(34,36,38,.15);
  border-radius: .28571429rem
}
.ui.basic.buttons ::slotted(.button) {
  border-radius: 0
}
.ui.basic.button:hover,
.ui.basic.buttons ::slotted(.button:hover) {
  background: #fff!important;
  color: rgba(0,0,0,.8)!important;
  box-shadow: 0 0 0 1px rgba(34,36,38,.35) inset,0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.basic.button:focus,
.ui.basic.buttons ::slotted(.button:focus) {
  background: #fff!important;
  color: rgba(0,0,0,.8)!important;
  box-shadow: 0 0 0 1px rgba(34,36,38,.35) inset,0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.basic.button:active,
.ui.basic.buttons ::slotted(.button:active) {
  background: #f8f8f8!important;
  color: rgba(0,0,0,.9)!important;
  box-shadow: 0 0 0 1px rgba(0,0,0,.15) inset,0 1px 4px 0 rgba(34,36,38,.15) inset
}
.ui.basic.active.button,
.ui.basic.buttons ::slotted(.active.button) {
  background: rgba(0,0,0,.05)!important;
  box-shadow: ''!important;
  color: rgba(0,0,0,.95)!important
}
.ui.basic.active.button:hover,
.ui.basic.buttons ::slotted(.active.button:hover) {
  background-color: rgba(0,0,0,.05)
}
.ui.basic.buttons .button:hover {
  box-shadow: 0 0 0 1px rgba(34,36,38,.35) inset,0 0 0 0 rgba(34,36,38,.15) inset inset
}
.ui.basic.buttons .button:active {
  box-shadow: 0 0 0 1px rgba(0,0,0,.15) inset,0 1px 4px 0 rgba(34,36,38,.15) inset inset
}
.ui.basic.buttons .active.button {
  box-shadow: ''!important
}
.ui.basic.inverted.button,
.ui.basic.inverted.buttons ::slotted(.button) {
  background-color: transparent!important;
  color: #f9fafb!important;
  box-shadow: 0 0 0 2px rgba(255,255,255,.5) inset!important
}
.ui.basic.inverted.button:hover,
.ui.basic.inverted.buttons ::slotted(.button:hover) {
  color: #fff!important;
  box-shadow: 0 0 0 2px #fff inset!important
}
.ui.basic.inverted.button:focus,
.ui.basic.inverted.buttons ::slotted(.button:focus) {
  color: #fff!important;
  box-shadow: 0 0 0 2px #fff inset!important
}
.ui.basic.inverted.button:active,
.ui.basic.inverted.buttons ::slotted(.button:active) {
  background-color: rgba(255,255,255,.08)!important;
  color: #fff!important;
  box-shadow: 0 0 0 2px rgba(255,255,255,.9) inset!important
}
.ui.basic.inverted.active.button,
.ui.basic.inverted.buttons ::slotted(.active.button) {
  background-color: rgba(255,255,255,.08);
  color: #fff;
  text-shadow: none;
  box-shadow: 0 0 0 2px rgba(255,255,255,.7) inset
}
.ui.basic.inverted.active.button:hover,
.ui.basic.inverted.buttons ::slotted(.active.button:hover) {
  background-color: rgba(255,255,255,.15);
  box-shadow: 0 0 0 2px #fff inset!important
}
.ui.basic.buttons ::slotted(.button) {
  border-left: 1px solid rgba(34,36,38,.15);
  box-shadow: none
}
.ui.basic.vertical.buttons ::slotted(.button) {
  border-left: none
}
.ui.basic.vertical.buttons ::slotted(.button) {
  border-left-width: 0;
  border-top: 1px solid rgba(34,36,38,.15)
}
.ui.basic.vertical.buttons ::slotted(.button:first-child) {
  border-top-width: 0
}
.ui.labeled.icon.button,
.ui.labeled.icon.buttons ::slotted(.button) {
  position: relative;
  padding-left: 4.07142857em!important;
  padding-right: 1.5em!important
}
.ui.labeled.icon.button > ::slotted(.icon),
.ui.labeled.icon.buttons > ::slotted(.button) > .icon {
  position: absolute;
  height: 100%;
  line-height: 1;
  border-radius: 0;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  text-align: center;
  margin: 0;
  width: 2.57142857em;
  background-color: rgba(0,0,0,.05);
  color: '';
  box-shadow: -1px 0 0 0 transparent inset
}
.ui.labeled.icon.button > ::slotted(.icon),
.ui.labeled.icon.buttons > ::slotted(.button) > .icon {
  top: 0;
  left: 0
}
.ui[class*='right labeled'].icon.button {
  padding-right: 4.07142857em!important;
  padding-left: 1.5em!important
}
.ui[class*='right labeled'].icon.button > ::slotted(.icon) {
  left: auto;
  right: 0;
  border-radius: 0;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  box-shadow: 1px 0 0 0 transparent inset
}
.ui.labeled.icon.button > .icon:after,
.ui.labeled.icon.button > .icon:before,
.ui.labeled.icon.buttons > ::slotted(.button) > .icon:after,
.ui.labeled.icon.buttons > ::slotted(.button) > .icon:before {
  display: block;
  position: absolute;
  width: 100%;
  top: 50%;
  text-align: center;
  transform: translateY(-50%)
}
.ui.labeled.icon.buttons ::slotted(.button) > ::slotted(.icon) {
  border-radius: 0
}
.ui.labeled.icon.buttons ::slotted(.button:first-child) > ::slotted(.icon) {
  border-top-left-radius: .28571429rem;
  border-bottom-left-radius: .28571429rem
}
.ui.labeled.icon.buttons ::slotted(.button:last-child) > ::slotted(.icon) {
  border-top-right-radius: .28571429rem;
  border-bottom-right-radius: .28571429rem
}
.ui.vertical.labeled.icon.buttons ::slotted(.button:first-child) > ::slotted(.icon) {
  border-radius: 0;
  border-top-left-radius: .28571429rem
}
.ui.vertical.labeled.icon.buttons ::slotted(.button:last-child) > ::slotted(.icon) {
  border-radius: 0;
  border-bottom-left-radius: .28571429rem
}
.ui.fluid[class*='left labeled'].icon.button,
.ui.fluid[class*='right labeled'].icon.button {
  padding-left: 1.5em!important;
  padding-right: 1.5em!important
}
.ui.button.toggle.active,
.ui.buttons .button.toggle.active,
.ui.toggle.buttons ::slotted(.active.button) {
  background-color: #21ba45!important;
  box-shadow: none!important;
  text-shadow: none;
  color: #fff!important
}
.ui.button.toggle.active:hover {
  background-color: #16ab39!important;
  text-shadow: none;
  color: #fff!important
}
.ui.circular.button {
  border-radius: 10em
}
.ui.circular.button > ::slotted(.icon) {
  width: 1em;
  vertical-align: baseline
}
.ui.buttons ::slotted(.or) {
  position: relative;
  width: .3em;
  height: 2.57142857em;
  z-index: 3
}
.ui.buttons ::slotted(.or:before) {
  position: absolute;
  text-align: center;
  border-radius: 500rem;
  content: 'or';
  top: 50%;
  left: 50%;
  background-color: #fff;
  text-shadow: none;
  margin-top: -.89285714em;
  margin-left: -.89285714em;
  width: 1.78571429em;
  height: 1.78571429em;
  line-height: 1.78571429em;
  color: rgba(0,0,0,.4);
  font-style: normal;
  font-weight: 700;
  box-shadow: 0 0 0 1px transparent inset
}
.ui.buttons ::slotted(.or[data-text]:before) {
  content: attr(data-text)
}
.ui.fluid.buttons ::slotted(.or) {
  width: 0!important
}
.ui.fluid.buttons ::slotted(.or:after) {
  display: none
}
.ui.attached.button {
  position: relative;
  display: block;
  margin: 0;
  border-radius: 0;
  box-shadow: 0 0 0 1px rgba(34,36,38,.15)!important
}
.ui.attached.top.button {
  border-radius: .28571429rem .28571429rem 0 0
}
.ui.attached.bottom.button {
  border-radius: 0 0 .28571429rem .28571429rem
}
.ui.left.attached.button {
  display: inline-block;
  border-left: none;
  text-align: right;
  padding-right: .75em;
  border-radius: .28571429rem 0 0 .28571429rem
}
.ui.right.attached.button {
  display: inline-block;
  text-align: left;
  padding-left: .75em;
  border-radius: 0 .28571429rem .28571429rem 0
}
.ui.attached.buttons {
  position: relative;
  display: flex;
  border-radius: 0;
  width: auto!important;
  z-index: 2;
  margin-left: -1px;
  margin-right: -1px
}
.ui.attached.buttons ::slotted(.button) {
  margin: 0
}
.ui.attached.buttons ::slotted(.button:first-child) {
  border-radius: 0
}
.ui.attached.buttons ::slotted(.button:last-child) {
  border-radius: 0
}
.ui[class*='top attached'].buttons {
  margin-bottom: -1px;
  border-radius: .28571429rem .28571429rem 0 0
}
.ui[class*='top attached'].buttons ::slotted(.button:first-child) {
  border-radius: .28571429rem 0 0 0
}
.ui[class*='top attached'].buttons ::slotted(.button:last-child) {
  border-radius: 0 .28571429rem 0 0
}
.ui[class*='bottom attached'].buttons {
  margin-top: -1px;
  border-radius: 0 0 .28571429rem .28571429rem
}
.ui[class*='bottom attached'].buttons ::slotted(.button:first-child) {
  border-radius: 0 0 0 .28571429rem
}
.ui[class*='bottom attached'].buttons ::slotted(.button:last-child) {
  border-radius: 0 0 .28571429rem 0
}
.ui[class*='left attached'].buttons {
  display: inline-flex;
  margin-right: 0;
  margin-left: -1px;
  border-radius: 0 .28571429rem .28571429rem 0
}
.ui[class*='left attached'].buttons ::slotted(.button:first-child) {
  margin-left: -1px;
  border-radius: 0 .28571429rem 0 0
}
.ui[class*='left attached'].buttons ::slotted(.button:last-child) {
  margin-left: -1px;
  border-radius: 0 0 .28571429rem 0
}
.ui[class*='right attached'].buttons {
  display: inline-flex;
  margin-left: 0;
  margin-right: -1px;
  border-radius: .28571429rem 0 0 .28571429rem
}
.ui[class*='right attached'].buttons ::slotted(.button:first-child) {
  margin-left: -1px;
  border-radius: .28571429rem 0 0 0
}
.ui[class*='right attached'].buttons ::slotted(.button:last-child) {
  margin-left: -1px;
  border-radius: 0 0 0 .28571429rem
}
.ui.fluid.button,
.ui.fluid.buttons {
  width: 100%
}
.ui.fluid.button {
  display: block
}
.ui.two.buttons {
  width: 100%
}
.ui.two.buttons > ::slotted(.button) {
  width: 50%
}
.ui.three.buttons {
  width: 100%
}
.ui.three.buttons > ::slotted(.button) {
  width: 33.333%
}
.ui.four.buttons {
  width: 100%
}
.ui.four.buttons > ::slotted(.button) {
  width: 25%
}
.ui.five.buttons {
  width: 100%
}
.ui.five.buttons > ::slotted(.button) {
  width: 20%
}
.ui.six.buttons {
  width: 100%
}
.ui.six.buttons > ::slotted(.button) {
  width: 16.666%
}
.ui.seven.buttons {
  width: 100%
}
.ui.seven.buttons > ::slotted(.button) {
  width: 14.285%
}
.ui.eight.buttons {
  width: 100%
}
.ui.eight.buttons > ::slotted(.button) {
  width: 12.5%
}
.ui.nine.buttons {
  width: 100%
}
.ui.nine.buttons > ::slotted(.button) {
  width: 11.11%
}
.ui.ten.buttons {
  width: 100%
}
.ui.ten.buttons > ::slotted(.button) {
  width: 10%
}
.ui.eleven.buttons {
  width: 100%
}
.ui.eleven.buttons > ::slotted(.button) {
  width: 9.09%
}
.ui.twelve.buttons {
  width: 100%
}
.ui.twelve.buttons > ::slotted(.button) {
  width: 8.3333%
}
.ui.fluid.vertical.buttons,
.ui.fluid.vertical.buttons > ::slotted(.button) {
  display: flex;
  width: auto
}
.ui.two.vertical.buttons > ::slotted(.button) {
  height: 50%
}
.ui.three.vertical.buttons > ::slotted(.button) {
  height: 33.333%
}
.ui.four.vertical.buttons > ::slotted(.button) {
  height: 25%
}
.ui.five.vertical.buttons > ::slotted(.button) {
  height: 20%
}
.ui.six.vertical.buttons > ::slotted(.button) {
  height: 16.666%
}
.ui.seven.vertical.buttons > ::slotted(.button) {
  height: 14.285%
}
.ui.eight.vertical.buttons > ::slotted(.button) {
  height: 12.5%
}
.ui.nine.vertical.buttons > ::slotted(.button) {
  height: 11.11%
}
.ui.ten.vertical.buttons > ::slotted(.button) {
  height: 10%
}
.ui.eleven.vertical.buttons > ::slotted(.button) {
  height: 9.09%
}
.ui.twelve.vertical.buttons > ::slotted(.button) {
  height: 8.3333%
}
.ui.black.button,
.ui.black.buttons ::slotted(.button) {
  background-color: #1b1c1d;
  color: #fff;
  text-shadow: none;
  background-image: none
}
.ui.black.button {
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.black.button:hover,
.ui.black.buttons ::slotted(.button:hover) {
  background-color: #27292a;
  color: #fff;
  text-shadow: none
}
.ui.black.button:focus,
.ui.black.buttons ::slotted(.button:focus) {
  background-color: #2f3032;
  color: #fff;
  text-shadow: none
}
.ui.black.button:active,
.ui.black.buttons ::slotted(.button:active) {
  background-color: #343637;
  color: #fff;
  text-shadow: none
}
.ui.black.active.button,
.ui.black.button ::slotted(.active.button:active),
.ui.black.buttons ::slotted(.active.button),
.ui.black.buttons ::slotted(.active.button:active) {
  background-color: #0f0f10;
  color: #fff;
  text-shadow: none
}
.ui.basic.black.button,
.ui.basic.black.buttons ::slotted(.button) {
  box-shadow: 0 0 0 1px #1b1c1d inset!important;
  color: #1b1c1d!important
}
.ui.basic.black.button:hover,
.ui.basic.black.buttons ::slotted(.button:hover) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #27292a inset!important;
  color: #27292a!important
}
.ui.basic.black.button:focus,
.ui.basic.black.buttons ::slotted(.button:focus) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #2f3032 inset!important;
  color: #27292a!important
}
.ui.basic.black.active.button,
.ui.basic.black.buttons ::slotted(.active.button) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #0f0f10 inset!important;
  color: #343637!important
}
.ui.basic.black.button:active,
.ui.basic.black.buttons ::slotted(.button:active) {
  box-shadow: 0 0 0 1px #343637 inset!important;
  color: #343637!important
}
.ui.buttons:not(.vertical) > .basic.black.button:not(:first-child) {
  margin-left: -1px
}
.ui.inverted.black.button,
.ui.inverted.black.buttons ::slotted(.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px #d4d4d5 inset!important;
  color: #fff
}
.ui.inverted.black.button.active,
.ui.inverted.black.button:active,
.ui.inverted.black.button:focus,
.ui.inverted.black.button:hover,
.ui.inverted.black.buttons ::slotted(.button.active),
.ui.inverted.black.buttons ::slotted(.button:active),
.ui.inverted.black.buttons ::slotted(.button:focus),
.ui.inverted.black.buttons ::slotted(.button:hover) {
  box-shadow: none!important;
  color: #fff
}
.ui.inverted.black.button:hover,
.ui.inverted.black.buttons ::slotted(.button:hover) {
  background-color: #000
}
.ui.inverted.black.button:focus,
.ui.inverted.black.buttons ::slotted(.button:focus) {
  background-color: #000
}
.ui.inverted.black.active.button,
.ui.inverted.black.buttons ::slotted(.active.button) {
  background-color: #000
}
.ui.inverted.black.button:active,
.ui.inverted.black.buttons ::slotted(.button:active) {
  background-color: #000
}
.ui.inverted.black.basic.button,
.ui.inverted.black.basic.buttons ::slotted(.button),
.ui.inverted.black.buttons ::slotted(.basic.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px rgba(255,255,255,.5) inset!important;
  color: #fff!important
}
.ui.inverted.black.basic.button:hover,
.ui.inverted.black.basic.buttons ::slotted(.button:hover),
.ui.inverted.black.buttons ::slotted(.basic.button:hover) {
  box-shadow: 0 0 0 2px #000 inset!important;
  color: #fff!important
}
.ui.inverted.black.basic.button:focus,
.ui.inverted.black.basic.buttons ::slotted(.button:focus) {
  box-shadow: 0 0 0 2px #000 inset!important;
  color: #545454!important
}
.ui.inverted.black.basic.active.button,
.ui.inverted.black.basic.buttons ::slotted(.active.button),
.ui.inverted.black.buttons ::slotted(.basic.active.button) {
  box-shadow: 0 0 0 2px #000 inset!important;
  color: #fff!important
}
.ui.inverted.black.basic.button:active,
.ui.inverted.black.basic.buttons ::slotted(.button:active),
.ui.inverted.black.buttons ::slotted(.basic.button:active) {
  box-shadow: 0 0 0 2px #000 inset!important;
  color: #fff!important
}
.ui.grey.button,
.ui.grey.buttons ::slotted(.button) {
  background-color: #767676;
  color: #fff;
  text-shadow: none;
  background-image: none
}
.ui.grey.button {
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.grey.button:hover,
.ui.grey.buttons ::slotted(.button:hover) {
  background-color: #838383;
  color: #fff;
  text-shadow: none
}
.ui.grey.button:focus,
.ui.grey.buttons ::slotted(.button:focus) {
  background-color: #8a8a8a;
  color: #fff;
  text-shadow: none
}
.ui.grey.button:active,
.ui.grey.buttons ::slotted(.button:active) {
  background-color: #909090;
  color: #fff;
  text-shadow: none
}
.ui.grey.active.button,
.ui.grey.button ::slotted(.active.button:active),
.ui.grey.buttons ::slotted(.active.button),
.ui.grey.buttons ::slotted(.active.button:active) {
  background-color: #696969;
  color: #fff;
  text-shadow: none
}
.ui.basic.grey.button,
.ui.basic.grey.buttons ::slotted(.button) {
  box-shadow: 0 0 0 1px #767676 inset!important;
  color: #767676!important
}
.ui.basic.grey.button:hover,
.ui.basic.grey.buttons ::slotted(.button:hover) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #838383 inset!important;
  color: #838383!important
}
.ui.basic.grey.button:focus,
.ui.basic.grey.buttons ::slotted(.button:focus) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #8a8a8a inset!important;
  color: #838383!important
}
.ui.basic.grey.active.button,
.ui.basic.grey.buttons ::slotted(.active.button) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #696969 inset!important;
  color: #909090!important
}
.ui.basic.grey.button:active,
.ui.basic.grey.buttons ::slotted(.button:active) {
  box-shadow: 0 0 0 1px #909090 inset!important;
  color: #909090!important
}
.ui.buttons:not(.vertical) > .basic.grey.button:not(:first-child) {
  margin-left: -1px
}
.ui.inverted.grey.button,
.ui.inverted.grey.buttons ::slotted(.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px #d4d4d5 inset!important;
  color: #fff
}
.ui.inverted.grey.button.active,
.ui.inverted.grey.button:active,
.ui.inverted.grey.button:focus,
.ui.inverted.grey.button:hover,
.ui.inverted.grey.buttons ::slotted(.button.active),
.ui.inverted.grey.buttons ::slotted(.button:active),
.ui.inverted.grey.buttons ::slotted(.button:focus),
.ui.inverted.grey.buttons ::slotted(.button:hover) {
  box-shadow: none!important;
  color: rgba(0,0,0,.6)
}
.ui.inverted.grey.button:hover,
.ui.inverted.grey.buttons ::slotted(.button:hover) {
  background-color: #cfd0d2
}
.ui.inverted.grey.button:focus,
.ui.inverted.grey.buttons ::slotted(.button:focus) {
  background-color: #c7c9cb
}
.ui.inverted.grey.active.button,
.ui.inverted.grey.buttons ::slotted(.active.button) {
  background-color: #cfd0d2
}
.ui.inverted.grey.button:active,
.ui.inverted.grey.buttons ::slotted(.button:active) {
  background-color: #c2c4c5
}
.ui.inverted.grey.basic.button,
.ui.inverted.grey.basic.buttons ::slotted(.button),
.ui.inverted.grey.buttons ::slotted(.basic.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px rgba(255,255,255,.5) inset!important;
  color: #fff!important
}
.ui.inverted.grey.basic.button:hover,
.ui.inverted.grey.basic.buttons ::slotted(.button:hover),
.ui.inverted.grey.buttons ::slotted(.basic.button:hover) {
  box-shadow: 0 0 0 2px #cfd0d2 inset!important;
  color: #fff!important
}
.ui.inverted.grey.basic.button:focus,
.ui.inverted.grey.basic.buttons ::slotted(.button:focus) {
  box-shadow: 0 0 0 2px #c7c9cb inset!important;
  color: #dcddde!important
}
.ui.inverted.grey.basic.active.button,
.ui.inverted.grey.basic.buttons ::slotted(.active.button),
.ui.inverted.grey.buttons ::slotted(.basic.active.button) {
  box-shadow: 0 0 0 2px #cfd0d2 inset!important;
  color: #fff!important
}
.ui.inverted.grey.basic.button:active,
.ui.inverted.grey.basic.buttons ::slotted(.button:active),
.ui.inverted.grey.buttons ::slotted(.basic.button:active) {
  box-shadow: 0 0 0 2px #c2c4c5 inset!important;
  color: #fff!important
}
.ui.brown.button,
.ui.brown.buttons ::slotted(.button) {
  background-color: #a5673f;
  color: #fff;
  text-shadow: none;
  background-image: none
}
.ui.brown.button {
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.brown.button:hover,
.ui.brown.buttons ::slotted(.button:hover) {
  background-color: #975b33;
  color: #fff;
  text-shadow: none
}
.ui.brown.button:focus,
.ui.brown.buttons ::slotted(.button:focus) {
  background-color: #90532b;
  color: #fff;
  text-shadow: none
}
.ui.brown.button:active,
.ui.brown.buttons ::slotted(.button:active) {
  background-color: #805031;
  color: #fff;
  text-shadow: none
}
.ui.brown.active.button,
.ui.brown.button ::slotted(.active.button:active),
.ui.brown.buttons ::slotted(.active.button),
.ui.brown.buttons ::slotted(.active.button:active) {
  background-color: #995a31;
  color: #fff;
  text-shadow: none
}
.ui.basic.brown.button,
.ui.basic.brown.buttons ::slotted(.button) {
  box-shadow: 0 0 0 1px #a5673f inset!important;
  color: #a5673f!important
}
.ui.basic.brown.button:hover,
.ui.basic.brown.buttons ::slotted(.button:hover) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #975b33 inset!important;
  color: #975b33!important
}
.ui.basic.brown.button:focus,
.ui.basic.brown.buttons ::slotted(.button:focus) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #90532b inset!important;
  color: #975b33!important
}
.ui.basic.brown.active.button,
.ui.basic.brown.buttons ::slotted(.active.button) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #995a31 inset!important;
  color: #805031!important
}
.ui.basic.brown.button:active,
.ui.basic.brown.buttons ::slotted(.button:active) {
  box-shadow: 0 0 0 1px #805031 inset!important;
  color: #805031!important
}
.ui.buttons:not(.vertical) > ::slotted(.basic.brown.button:not(:first-child)) {
  margin-left: -1px
}
.ui.inverted.brown.button,
.ui.inverted.brown.buttons ::slotted(.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px #d67c1c inset!important;
  color: #d67c1c
}
.ui.inverted.brown.button.active,
.ui.inverted.brown.button:active,
.ui.inverted.brown.button:focus,
.ui.inverted.brown.button:hover,
.ui.inverted.brown.buttons ::slotted(.button.active),
.ui.inverted.brown.buttons ::slotted(.button:active),
.ui.inverted.brown.buttons ::slotted(.button:focus),
.ui.inverted.brown.buttons ::slotted(.button:hover) {
  box-shadow: none!important;
  color: #fff
}
.ui.inverted.brown.button:hover,
.ui.inverted.brown.buttons ::slotted(.button:hover) {
  background-color: #c86f11
}
.ui.inverted.brown.button:focus,
.ui.inverted.brown.buttons ::slotted(.button:focus) {
  background-color: #c16808
}
.ui.inverted.brown.active.button,
.ui.inverted.brown.buttons ::slotted(.active.button) {
  background-color: #cc6f0d
}
.ui.inverted.brown.button:active,
.ui.inverted.brown.buttons ::slotted(.button:active) {
  background-color: #a96216
}
.ui.inverted.brown.basic.button,
.ui.inverted.brown.basic.buttons ::slotted(.button),
.ui.inverted.brown.buttons ::slotted(.basic.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px rgba(255,255,255,.5) inset!important;
  color: #fff!important
}
.ui.inverted.brown.basic.button:hover,
.ui.inverted.brown.basic.buttons ::slotted(.button:hover),
.ui.inverted.brown.buttons ::slotted(.basic.button:hover) {
  box-shadow: 0 0 0 2px #c86f11 inset!important;
  color: #d67c1c!important
}
.ui.inverted.brown.basic.button:focus,
.ui.inverted.brown.basic.buttons ::slotted(.button:focus) {
  box-shadow: 0 0 0 2px #c16808 inset!important;
  color: #d67c1c!important
}
.ui.inverted.brown.basic.active.button,
.ui.inverted.brown.basic.buttons ::slotted(.active.button),
.ui.inverted.brown.buttons ::slotted(.basic.active.button) {
  box-shadow: 0 0 0 2px #cc6f0d inset!important;
  color: #d67c1c!important
}
.ui.inverted.brown.basic.button:active,
.ui.inverted.brown.basic.buttons ::slotted(.button:active),
.ui.inverted.brown.buttons ::slotted(.basic.button:active) {
  box-shadow: 0 0 0 2px #a96216 inset!important;
  color: #d67c1c!important
}
.ui.blue.button,
.ui.blue.buttons ::slotted(.button) {
  background-color: #2185d0;
  color: #fff;
  text-shadow: none;
  background-image: none
}
.ui.blue.button {
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.blue.button:hover,
.ui.blue.buttons ::slotted(.button:hover) {
  background-color: #1678c2;
  color: #fff;
  text-shadow: none
}
.ui.blue.button:focus,
.ui.blue.buttons ::slotted(.button:focus) {
  background-color: #0d71bb;
  color: #fff;
  text-shadow: none
}
.ui.blue.button:active,
.ui.blue.buttons ::slotted(.button:active) {
  background-color: #1a69a4;
  color: #fff;
  text-shadow: none
}
.ui.blue.active.button,
.ui.blue.button ::slotted(.active.button:active),
.ui.blue.buttons ::slotted(.active.button),
.ui.blue.buttons ::slotted(.active.button:active) {
  background-color: #1279c6;
  color: #fff;
  text-shadow: none
}
.ui.basic.blue.button,
.ui.basic.blue.buttons ::slotted(.button) {
  box-shadow: 0 0 0 1px #2185d0 inset!important;
  color: #2185d0!important
}
.ui.basic.blue.button:hover,
.ui.basic.blue.buttons ::slotted(.button:hover) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #1678c2 inset!important;
  color: #1678c2!important
}
.ui.basic.blue.button:focus,
.ui.basic.blue.buttons ::slotted(.button:focus) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #0d71bb inset!important;
  color: #1678c2!important
}
.ui.basic.blue.active.button,
.ui.basic.blue.buttons ::slotted(.active.button) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #1279c6 inset!important;
  color: #1a69a4!important
}
.ui.basic.blue.button:active,
.ui.basic.blue.buttons ::slotted(.button:active) {
  box-shadow: 0 0 0 1px #1a69a4 inset!important;
  color: #1a69a4!important
}
.ui.buttons:not(.vertical) > ::slotted(.basic.blue.button:not(:first-child)) {
  margin-left: -1px
}
.ui.inverted.blue.button,
.ui.inverted.blue.buttons ::slotted(.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px #54c8ff inset!important;
  color: #54c8ff
}
.ui.inverted.blue.button.active,
.ui.inverted.blue.button:active,
.ui.inverted.blue.button:focus,
.ui.inverted.blue.button:hover,
.ui.inverted.blue.buttons ::slotted(.button.active),
.ui.inverted.blue.buttons ::slotted(.button:active),
.ui.inverted.blue.buttons ::slotted(.button:focus),
.ui.inverted.blue.buttons ::slotted(.button:hover) {
  box-shadow: none!important;
  color: #fff
}
.ui.inverted.blue.button:hover,
.ui.inverted.blue.buttons ::slotted(.button:hover) {
  background-color: #3ac0ff
}
.ui.inverted.blue.button:focus,
.ui.inverted.blue.buttons ::slotted(.button:focus) {
  background-color: #2bbbff
}
.ui.inverted.blue.active.button,
.ui.inverted.blue.buttons ::slotted(.active.button) {
  background-color: #3ac0ff
}
.ui.inverted.blue.button:active,
.ui.inverted.blue.buttons ::slotted(.button:active) {
  background-color: #21b8ff
}
.ui.inverted.blue.basic.button,
.ui.inverted.blue.basic.buttons ::slotted(.button),
.ui.inverted.blue.buttons ::slotted(.basic.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px rgba(255,255,255,.5) inset!important;
  color: #fff!important
}
.ui.inverted.blue.basic.button:hover,
.ui.inverted.blue.basic.buttons ::slotted(.button:hover),
.ui.inverted.blue.buttons ::slotted(.basic.button:hover) {
  box-shadow: 0 0 0 2px #3ac0ff inset!important;
  color: #54c8ff!important
}
.ui.inverted.blue.basic.button:focus,
.ui.inverted.blue.basic.buttons ::slotted(.button:focus) {
  box-shadow: 0 0 0 2px #2bbbff inset!important;
  color: #54c8ff!important
}
.ui.inverted.blue.basic.active.button,
.ui.inverted.blue.basic.buttons ::slotted(.active.button),
.ui.inverted.blue.buttons ::slotted(.basic.active.button) {
  box-shadow: 0 0 0 2px #3ac0ff inset!important;
  color: #54c8ff!important
}
.ui.inverted.blue.basic.button:active,
.ui.inverted.blue.basic.buttons ::slotted(.button:active),
.ui.inverted.blue.buttons ::slotted(.basic.button:active) {
  box-shadow: 0 0 0 2px #21b8ff inset!important;
  color: #54c8ff!important
}
.ui.green.button,
.ui.green.buttons ::slotted(.button) {
  background-color: #21ba45;
  color: #fff;
  text-shadow: none;
  background-image: none
}
.ui.green.button {
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.green.button:hover,
.ui.green.buttons ::slotted(.button:hover) {
  background-color: #16ab39;
  color: #fff;
  text-shadow: none
}
.ui.green.button:focus,
.ui.green.buttons ::slotted(.button:focus) {
  background-color: #0ea432;
  color: #fff;
  text-shadow: none
}
.ui.green.button:active,
.ui.green.buttons ::slotted(.button:active) {
  background-color: #198f35;
  color: #fff;
  text-shadow: none
}
.ui.green.active.button,
.ui.green.button ::slotted(.active.button:active),
.ui.green.buttons ::slotted(.active.button),
.ui.green.buttons ::slotted(.active.button:active) {
  background-color: #13ae38;
  color: #fff;
  text-shadow: none
}
.ui.basic.green.button,
.ui.basic.green.buttons ::slotted(.button) {
  box-shadow: 0 0 0 1px #21ba45 inset!important;
  color: #21ba45!important
}
.ui.basic.green.button:hover,
.ui.basic.green.buttons ::slotted(.button:hover) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #16ab39 inset!important;
  color: #16ab39!important
}
.ui.basic.green.button:focus,
.ui.basic.green.buttons ::slotted(.button:focus) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #0ea432 inset!important;
  color: #16ab39!important
}
.ui.basic.green.active.button,
.ui.basic.green.buttons ::slotted(.active.button) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #13ae38 inset!important;
  color: #198f35!important
}
.ui.basic.green.button:active,
.ui.basic.green.buttons ::slotted(.button:active) {
  box-shadow: 0 0 0 1px #198f35 inset!important;
  color: #198f35!important
}
.ui.buttons:not(.vertical) > ::slotted(.basic.green.button:not(:first-child)) {
  margin-left: -1px
}
.ui.inverted.green.button,
.ui.inverted.green.buttons ::slotted(.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px #2ecc40 inset!important;
  color: #2ecc40
}
.ui.inverted.green.button.active,
.ui.inverted.green.button:active,
.ui.inverted.green.button:focus,
.ui.inverted.green.button:hover,
.ui.inverted.green.buttons ::slotted(.button.active),
.ui.inverted.green.buttons ::slotted(.button:active),
.ui.inverted.green.buttons ::slotted(.button:focus),
.ui.inverted.green.buttons ::slotted(.button:hover) {
  box-shadow: none!important;
  color: #fff
}
.ui.inverted.green.button:hover,
.ui.inverted.green.buttons ::slotted(.button:hover) {
  background-color: #22be34
}
.ui.inverted.green.button:focus,
.ui.inverted.green.buttons ::slotted(.button:focus) {
  background-color: #19b82b
}
.ui.inverted.green.active.button,
.ui.inverted.green.buttons ::slotted(.active.button) {
  background-color: #1fc231
}
.ui.inverted.green.button:active,
.ui.inverted.green.buttons ::slotted(.button:active) {
  background-color: #25a233
}
.ui.inverted.green.basic.button,
.ui.inverted.green.basic.buttons ::slotted(.button),
.ui.inverted.green.buttons ::slotted(.basic.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px rgba(255,255,255,.5) inset!important;
  color: #fff!important
}
.ui.inverted.green.basic.button:hover,
.ui.inverted.green.basic.buttons ::slotted(.button:hover),
.ui.inverted.green.buttons ::slotted(.basic.button:hover) {
  box-shadow: 0 0 0 2px #22be34 inset!important;
  color: #2ecc40!important
}
.ui.inverted.green.basic.button:focus,
.ui.inverted.green.basic.buttons ::slotted(.button:focus) {
  box-shadow: 0 0 0 2px #19b82b inset!important;
  color: #2ecc40!important
}
.ui.inverted.green.basic.active.button,
.ui.inverted.green.basic.buttons ::slotted(.active.button),
.ui.inverted.green.buttons ::slotted(.basic.active.button) {
  box-shadow: 0 0 0 2px #1fc231 inset!important;
  color: #2ecc40!important
}
.ui.inverted.green.basic.button:active,
.ui.inverted.green.basic.buttons ::slotted(.button:active),
.ui.inverted.green.buttons ::slotted(.basic.button:active) {
  box-shadow: 0 0 0 2px #25a233 inset!important;
  color: #2ecc40!important
}
.ui.orange.button,
.ui.orange.buttons ::slotted(.button) {
  background-color: #f2711c;
  color: #fff;
  text-shadow: none;
  background-image: none
}
.ui.orange.button {
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.orange.button:hover,
.ui.orange.buttons ::slotted(.button:hover) {
  background-color: #f26202;
  color: #fff;
  text-shadow: none
}
.ui.orange.button:focus,
.ui.orange.buttons ::slotted(.button:focus) {
  background-color: #e55b00;
  color: #fff;
  text-shadow: none
}
.ui.orange.button:active,
.ui.orange.buttons ::slotted(.button:active) {
  background-color: #cf590c;
  color: #fff;
  text-shadow: none
}
.ui.orange.active.button,
.ui.orange.button ::slotted(.active.button:active),
.ui.orange.buttons ::slotted(.active.button),
.ui.orange.buttons ::slotted(.active.button:active) {
  background-color: #f56100;
  color: #fff;
  text-shadow: none
}
.ui.basic.orange.button,
.ui.basic.orange.buttons ::slotted(.button) {
  box-shadow: 0 0 0 1px #f2711c inset!important;
  color: #f2711c!important
}
.ui.basic.orange.button:hover,
.ui.basic.orange.buttons ::slotted(.button:hover) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #f26202 inset!important;
  color: #f26202!important
}
.ui.basic.orange.button:focus,
.ui.basic.orange.buttons ::slotted(.button:focus) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #e55b00 inset!important;
  color: #f26202!important
}
.ui.basic.orange.active.button,
.ui.basic.orange.buttons ::slotted(.active.button) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #f56100 inset!important;
  color: #cf590c!important
}
.ui.basic.orange.button:active,
.ui.basic.orange.buttons ::slotted(.button:active) {
  box-shadow: 0 0 0 1px #cf590c inset!important;
  color: #cf590c!important
}
.ui.buttons:not(.vertical) > ::slotted(.basic.orange.button:not(:first-child)) {
  margin-left: -1px
}
.ui.inverted.orange.button,
.ui.inverted.orange.buttons ::slotted(.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px #ff851b inset!important;
  color: #ff851b
}
.ui.inverted.orange.button.active,
.ui.inverted.orange.button:active,
.ui.inverted.orange.button:focus,
.ui.inverted.orange.button:hover,
.ui.inverted.orange.buttons ::slotted(.button.active),
.ui.inverted.orange.buttons ::slotted(.button:active),
.ui.inverted.orange.buttons ::slotted(.button:focus),
.ui.inverted.orange.buttons ::slotted(.button:hover) {
  box-shadow: none!important;
  color: #fff
}
.ui.inverted.orange.button:hover,
.ui.inverted.orange.buttons ::slotted(.button:hover) {
  background-color: #ff7701
}
.ui.inverted.orange.button:focus,
.ui.inverted.orange.buttons ::slotted(.button:focus) {
  background-color: #f17000
}
.ui.inverted.orange.active.button,
.ui.inverted.orange.buttons ::slotted(.active.button) {
  background-color: #ff7701
}
.ui.inverted.orange.button:active,
.ui.inverted.orange.buttons ::slotted(.button:active) {
  background-color: #e76b00
}
.ui.inverted.orange.basic.button,
.ui.inverted.orange.basic.buttons ::slotted(.button),
.ui.inverted.orange.buttons ::slotted(.basic.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px rgba(255,255,255,.5) inset!important;
  color: #fff!important
}
.ui.inverted.orange.basic.button:hover,
.ui.inverted.orange.basic.buttons ::slotted(.button:hover),
.ui.inverted.orange.buttons ::slotted(.basic.button:hover) {
  box-shadow: 0 0 0 2px #ff7701 inset!important;
  color: #ff851b!important
}
.ui.inverted.orange.basic.button:focus,
.ui.inverted.orange.basic.buttons ::slotted(.button:focus) {
  box-shadow: 0 0 0 2px #f17000 inset!important;
  color: #ff851b!important
}
.ui.inverted.orange.basic.active.button,
.ui.inverted.orange.basic.buttons ::slotted(.active.button),
.ui.inverted.orange.buttons ::slotted(.basic.active.button) {
  box-shadow: 0 0 0 2px #ff7701 inset!important;
  color: #ff851b!important
}
.ui.inverted.orange.basic.button:active,
.ui.inverted.orange.basic.buttons ::slotted(.button:active),
.ui.inverted.orange.buttons ::slotted(.basic.button:active) {
  box-shadow: 0 0 0 2px #e76b00 inset!important;
  color: #ff851b!important
}
.ui.pink.button,
.ui.pink.buttons ::slotted(.button) {
  background-color: #e03997;
  color: #fff;
  text-shadow: none;
  background-image: none
}
.ui.pink.button {
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.pink.button:hover,
.ui.pink.buttons ::slotted(.button:hover) {
  background-color: #e61a8d;
  color: #fff;
  text-shadow: none
}
.ui.pink.button:focus,
.ui.pink.buttons ::slotted(.button:focus) {
  background-color: #e10f85;
  color: #fff;
  text-shadow: none
}
.ui.pink.button:active,
.ui.pink.buttons ::slotted(.button:active) {
  background-color: #c71f7e;
  color: #fff;
  text-shadow: none
}
.ui.pink.active.button,
.ui.pink.button ::slotted(.active.button:active),
.ui.pink.buttons ::slotted(.active.button),
.ui.pink.buttons ::slotted(.active.button:active) {
  background-color: #ea158d;
  color: #fff;
  text-shadow: none
}
.ui.basic.pink.button,
.ui.basic.pink.buttons ::slotted(.button) {
  box-shadow: 0 0 0 1px #e03997 inset!important;
  color: #e03997!important
}
.ui.basic.pink.button:hover,
.ui.basic.pink.buttons ::slotted(.button:hover) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #e61a8d inset!important;
  color: #e61a8d!important
}
.ui.basic.pink.button:focus,
.ui.basic.pink.buttons ::slotted(.button:focus) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #e10f85 inset!important;
  color: #e61a8d!important
}
.ui.basic.pink.active.button,
.ui.basic.pink.buttons ::slotted(.active.button) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #ea158d inset!important;
  color: #c71f7e!important
}
.ui.basic.pink.button:active,
.ui.basic.pink.buttons ::slotted(.button:active) {
  box-shadow: 0 0 0 1px #c71f7e inset!important;
  color: #c71f7e!important
}
.ui.buttons:not(.vertical) > ::slotted(.basic.pink.button:not(:first-child)) {
  margin-left: -1px
}
.ui.inverted.pink.button,
.ui.inverted.pink.buttons ::slotted(.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px #ff8edf inset!important;
  color: #ff8edf
}
.ui.inverted.pink.button.active,
.ui.inverted.pink.button:active,
.ui.inverted.pink.button:focus,
.ui.inverted.pink.button:hover,
.ui.inverted.pink.buttons ::slotted(.button.active),
.ui.inverted.pink.buttons ::slotted(.button:active),
.ui.inverted.pink.buttons ::slotted(.button:focus),
.ui.inverted.pink.buttons ::slotted(.button:hover) {
  box-shadow: none!important;
  color: #fff
}
.ui.inverted.pink.button:hover,
.ui.inverted.pink.buttons ::slotted(.button:hover) {
  background-color: #ff74d8
}
.ui.inverted.pink.button:focus,
.ui.inverted.pink.buttons ::slotted(.button:focus) {
  background-color: #ff65d3
}
.ui.inverted.pink.active.button,
.ui.inverted.pink.buttons ::slotted(.active.button) {
  background-color: #ff74d8
}
.ui.inverted.pink.button:active,
.ui.inverted.pink.buttons ::slotted(.button:active) {
  background-color: #ff5bd1
}
.ui.inverted.pink.basic.button,
.ui.inverted.pink.basic.buttons ::slotted(.button),
.ui.inverted.pink.buttons ::slotted(.basic.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px rgba(255,255,255,.5) inset!important;
  color: #fff!important
}
.ui.inverted.pink.basic.button:hover,
.ui.inverted.pink.basic.buttons ::slotted(.button:hover),
.ui.inverted.pink.buttons ::slotted(.basic.button:hover) {
  box-shadow: 0 0 0 2px #ff74d8 inset!important;
  color: #ff8edf!important
}
.ui.inverted.pink.basic.button:focus,
.ui.inverted.pink.basic.buttons ::slotted(.button:focus) {
  box-shadow: 0 0 0 2px #ff65d3 inset!important;
  color: #ff8edf!important
}
.ui.inverted.pink.basic.active.button,
.ui.inverted.pink.basic.buttons ::slotted(.active.button),
.ui.inverted.pink.buttons ::slotted(.basic.active.button) {
  box-shadow: 0 0 0 2px #ff74d8 inset!important;
  color: #ff8edf!important
}
.ui.inverted.pink.basic.button:active,
.ui.inverted.pink.basic.buttons ::slotted(.button:active),
.ui.inverted.pink.buttons ::slotted(.basic.button:active) {
  box-shadow: 0 0 0 2px #ff5bd1 inset!important;
  color: #ff8edf!important
}
.ui.violet.button,
.ui.violet.buttons ::slotted(.button) {
  background-color: #6435c9;
  color: #fff;
  text-shadow: none;
  background-image: none
}
.ui.violet.button {
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.violet.button:hover,
.ui.violet.buttons ::slotted(.button:hover) {
  background-color: #5829bb;
  color: #fff;
  text-shadow: none
}
.ui.violet.button:focus,
.ui.violet.buttons ::slotted(.button:focus) {
  background-color: #4f20b5;
  color: #fff;
  text-shadow: none
}
.ui.violet.button:active,
.ui.violet.buttons ::slotted(.button:active) {
  background-color: #502aa1;
  color: #fff;
  text-shadow: none
}
.ui.violet.active.button,
.ui.violet.button ::slotted(.active.button:active),
.ui.violet.buttons ::slotted(.active.button),
.ui.violet.buttons ::slotted(.active.button:active) {
  background-color: #5626bf;
  color: #fff;
  text-shadow: none
}
.ui.basic.violet.button,
.ui.basic.violet.buttons ::slotted(.button) {
  box-shadow: 0 0 0 1px #6435c9 inset!important;
  color: #6435c9!important
}
.ui.basic.violet.button:hover,
.ui.basic.violet.buttons ::slotted(.button:hover) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #5829bb inset!important;
  color: #5829bb!important
}
.ui.basic.violet.button:focus,
.ui.basic.violet.buttons ::slotted(.button:focus) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #4f20b5 inset!important;
  color: #5829bb!important
}
.ui.basic.violet.active.button,
.ui.basic.violet.buttons ::slotted(.active.button) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #5626bf inset!important;
  color: #502aa1!important
}
.ui.basic.violet.button:active,
.ui.basic.violet.buttons ::slotted(.button:active) {
  box-shadow: 0 0 0 1px #502aa1 inset!important;
  color: #502aa1!important
}
.ui.buttons:not(.vertical) > .basic.violet.button:not(:first-child) {
  margin-left: -1px
}
.ui.inverted.violet.button,
.ui.inverted.violet.buttons ::slotted(.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px #a291fb inset!important;
  color: #a291fb
}
.ui.inverted.violet.button.active,
.ui.inverted.violet.button:active,
.ui.inverted.violet.button:focus,
.ui.inverted.violet.button:hover,
.ui.inverted.violet.buttons ::slotted(.button.active),
.ui.inverted.violet.buttons ::slotted(.button:active),
.ui.inverted.violet.buttons ::slotted(.button:focus),
.ui.inverted.violet.buttons ::slotted(.button:hover) {
  box-shadow: none!important;
  color: #fff
}
.ui.inverted.violet.button:hover,
.ui.inverted.violet.buttons ::slotted(.button:hover) {
  background-color: #8a73ff
}
.ui.inverted.violet.button:focus,
.ui.inverted.violet.buttons ::slotted(.button:focus) {
  background-color: #7d64ff
}
.ui.inverted.violet.active.button,
.ui.inverted.violet.buttons ::slotted(.active.button) {
  background-color: #8a73ff
}
.ui.inverted.violet.button:active,
.ui.inverted.violet.buttons ::slotted(.button:active) {
  background-color: #7860f9
}
.ui.inverted.violet.basic.button,
.ui.inverted.violet.basic.buttons ::slotted(.button),
.ui.inverted.violet.buttons ::slotted(.basic.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px rgba(255,255,255,.5) inset!important;
  color: #fff!important
}
.ui.inverted.violet.basic.button:hover,
.ui.inverted.violet.basic.buttons ::slotted(.button:hover),
.ui.inverted.violet.buttons ::slotted(.basic.button:hover) {
  box-shadow: 0 0 0 2px #8a73ff inset!important;
  color: #a291fb!important
}
.ui.inverted.violet.basic.button:focus,
.ui.inverted.violet.basic.buttons ::slotted(.button:focus) {
  box-shadow: 0 0 0 2px #7d64ff inset!important;
  color: #a291fb!important
}
.ui.inverted.violet.basic.active.button,
.ui.inverted.violet.basic.buttons ::slotted(.active.button),
.ui.inverted.violet.buttons ::slotted(.basic.active.button) {
  box-shadow: 0 0 0 2px #8a73ff inset!important;
  color: #a291fb!important
}
.ui.inverted.violet.basic.button:active,
.ui.inverted.violet.basic.buttons ::slotted(.button:active),
.ui.inverted.violet.buttons ::slotted(.basic.button:active) {
  box-shadow: 0 0 0 2px #7860f9 inset!important;
  color: #a291fb!important
}
.ui.purple.button,
.ui.purple.buttons ::slotted(.button) {
  background-color: #a333c8;
  color: #fff;
  text-shadow: none;
  background-image: none
}
.ui.purple.button {
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.purple.button:hover,
.ui.purple.buttons ::slotted(.button:hover) {
  background-color: #9627ba;
  color: #fff;
  text-shadow: none
}
.ui.purple.button:focus,
.ui.purple.buttons ::slotted(.button:focus) {
  background-color: #8f1eb4;
  color: #fff;
  text-shadow: none
}
.ui.purple.button:active,
.ui.purple.buttons ::slotted(.button:active) {
  background-color: #82299f;
  color: #fff;
  text-shadow: none
}
.ui.purple.active.button,
.ui.purple.button ::slotted(.active.button:active),
.ui.purple.buttons ::slotted(.active.button),
.ui.purple.buttons ::slotted(.active.button:active) {
  background-color: #9724be;
  color: #fff;
  text-shadow: none
}
.ui.basic.purple.button,
.ui.basic.purple.buttons ::slotted(.button) {
  box-shadow: 0 0 0 1px #a333c8 inset!important;
  color: #a333c8!important
}
.ui.basic.purple.button:hover,
.ui.basic.purple.buttons ::slotted(.button:hover) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #9627ba inset!important;
  color: #9627ba!important
}
.ui.basic.purple.button:focus,
.ui.basic.purple.buttons ::slotted(.button:focus) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #8f1eb4 inset!important;
  color: #9627ba!important
}
.ui.basic.purple.active.button,
.ui.basic.purple.buttons ::slotted(.active.button) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #9724be inset!important;
  color: #82299f!important
}
.ui.basic.purple.button:active,
.ui.basic.purple.buttons ::slotted(.button:active) {
  box-shadow: 0 0 0 1px #82299f inset!important;
  color: #82299f!important
}
.ui.buttons:not(.vertical) > .basic.purple.button:not(:first-child) {
  margin-left: -1px
}
.ui.inverted.purple.button,
.ui.inverted.purple.buttons ::slotted(.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px #dc73ff inset!important;
  color: #dc73ff
}
.ui.inverted.purple.button.active,
.ui.inverted.purple.button:active,
.ui.inverted.purple.button:focus,
.ui.inverted.purple.button:hover,
.ui.inverted.purple.buttons ::slotted(.button.active),
.ui.inverted.purple.buttons ::slotted(.button:active),
.ui.inverted.purple.buttons ::slotted(.button:focus),
.ui.inverted.purple.buttons ::slotted(.button:hover) {
  box-shadow: none!important;
  color: #fff
}
.ui.inverted.purple.button:hover,
.ui.inverted.purple.buttons ::slotted(.button:hover) {
  background-color: #d65aff
}
.ui.inverted.purple.button:focus,
.ui.inverted.purple.buttons ::slotted(.button:focus) {
  background-color: #d24aff
}
.ui.inverted.purple.active.button,
.ui.inverted.purple.buttons ::slotted(.active.button) {
  background-color: #d65aff
}
.ui.inverted.purple.button:active,
.ui.inverted.purple.buttons ::slotted(.button:active) {
  background-color: #cf40ff
}
.ui.inverted.purple.basic.button,
.ui.inverted.purple.basic.buttons ::slotted(.button),
.ui.inverted.purple.buttons ::slotted(.basic.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px rgba(255,255,255,.5) inset!important;
  color: #fff!important
}
.ui.inverted.purple.basic.button:hover,
.ui.inverted.purple.basic.buttons ::slotted(.button:hover),
.ui.inverted.purple.buttons ::slotted(.basic.button:hover) {
  box-shadow: 0 0 0 2px #d65aff inset!important;
  color: #dc73ff!important
}
.ui.inverted.purple.basic.button:focus,
.ui.inverted.purple.basic.buttons ::slotted(.button:focus) {
  box-shadow: 0 0 0 2px #d24aff inset!important;
  color: #dc73ff!important
}
.ui.inverted.purple.basic.active.button,
.ui.inverted.purple.basic.buttons ::slotted(.active.button),
.ui.inverted.purple.buttons ::slotted(.basic.active.button) {
  box-shadow: 0 0 0 2px #d65aff inset!important;
  color: #dc73ff!important
}
.ui.inverted.purple.basic.button:active,
.ui.inverted.purple.basic.buttons ::slotted(.button:active),
.ui.inverted.purple.buttons ::slotted(.basic.button:active) {
  box-shadow: 0 0 0 2px #cf40ff inset!important;
  color: #dc73ff!important
}
.ui.red.button,
.ui.red.buttons ::slotted(.button) {
  background-color: #db2828;
  color: #fff;
  text-shadow: none;
  background-image: none
}
.ui.red.button {
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.red.button:hover,
.ui.red.buttons ::slotted(.button:hover) {
  background-color: #d01919;
  color: #fff;
  text-shadow: none
}
.ui.red.button:focus,
.ui.red.buttons ::slotted(.button:focus) {
  background-color: #ca1010;
  color: #fff;
  text-shadow: none
}
.ui.red.button:active,
.ui.red.buttons ::slotted(.button:active) {
  background-color: #b21e1e;
  color: #fff;
  text-shadow: none
}
.ui.red.active.button,
.ui.red.button ::slotted(.active.button:active),
.ui.red.buttons ::slotted(.active.button),
.ui.red.buttons ::slotted(.active.button:active) {
  background-color: #d41515;
  color: #fff;
  text-shadow: none
}
.ui.basic.red.button,
.ui.basic.red.buttons ::slotted(.button) {
  box-shadow: 0 0 0 1px #db2828 inset!important;
  color: #db2828!important
}
.ui.basic.red.button:hover,
.ui.basic.red.buttons ::slotted(.button:hover) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #d01919 inset!important;
  color: #d01919!important
}
.ui.basic.red.button:focus,
.ui.basic.red.buttons ::slotted(.button:focus) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #ca1010 inset!important;
  color: #d01919!important
}
.ui.basic.red.active.button,
.ui.basic.red.buttons ::slotted(.active.button) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #d41515 inset!important;
  color: #b21e1e!important
}
.ui.basic.red.button:active,
.ui.basic.red.buttons ::slotted(.button:active) {
  box-shadow: 0 0 0 1px #b21e1e inset!important;
  color: #b21e1e!important
}
.ui.buttons:not(.vertical) > ::slotted(.basic.red.button:not(:first-child)) {
  margin-left: -1px
}
.ui.inverted.red.button,
.ui.inverted.red.buttons ::slotted(.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px #ff695e inset!important;
  color: #ff695e
}
.ui.inverted.red.button.active,
.ui.inverted.red.button:active,
.ui.inverted.red.button:focus,
.ui.inverted.red.button:hover,
.ui.inverted.red.buttons ::slotted(.button.active),
.ui.inverted.red.buttons ::slotted(.button:active),
.ui.inverted.red.buttons ::slotted(.button:focus),
.ui.inverted.red.buttons ::slotted(.button:hover) {
  box-shadow: none!important;
  color: #fff
}
.ui.inverted.red.button:hover,
.ui.inverted.red.buttons ::slotted(.button:hover) {
  background-color: #ff5144
}
.ui.inverted.red.button:focus,
.ui.inverted.red.buttons ::slotted(.button:focus) {
  background-color: #ff4335
}
.ui.inverted.red.active.button,
.ui.inverted.red.buttons ::slotted(.active.button) {
  background-color: #ff5144
}
.ui.inverted.red.button:active,
.ui.inverted.red.buttons ::slotted(.button:active) {
  background-color: #ff392b
}
.ui.inverted.red.basic.button,
.ui.inverted.red.basic.buttons ::slotted(.button),
.ui.inverted.red.buttons ::slotted(.basic.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px rgba(255,255,255,.5) inset!important;
  color: #fff!important
}
.ui.inverted.red.basic.button:hover,
.ui.inverted.red.basic.buttons ::slotted(.button:hover),
.ui.inverted.red.buttons ::slotted(.basic.button:hover) {
  box-shadow: 0 0 0 2px #ff5144 inset!important;
  color: #ff695e!important
}
.ui.inverted.red.basic.button:focus,
.ui.inverted.red.basic.buttons ::slotted(.button:focus) {
  box-shadow: 0 0 0 2px #ff4335 inset!important;
  color: #ff695e!important
}
.ui.inverted.red.basic.active.button,
.ui.inverted.red.basic.buttons ::slotted(.active.button),
.ui.inverted.red.buttons ::slotted(.basic.active.button) {
  box-shadow: 0 0 0 2px #ff5144 inset!important;
  color: #ff695e!important
}
.ui.inverted.red.basic.button:active,
.ui.inverted.red.basic.buttons ::slotted(.button:active),
.ui.inverted.red.buttons ::slotted(.basic.button:active) {
  box-shadow: 0 0 0 2px #ff392b inset!important;
  color: #ff695e!important
}
.ui.teal.button,
.ui.teal.buttons ::slotted(.button) {
  background-color: #00b5ad;
  color: #fff;
  text-shadow: none;
  background-image: none
}
.ui.teal.button {
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.teal.button:hover,
.ui.teal.buttons ::slotted(.button:hover) {
  background-color: #009c95;
  color: #fff;
  text-shadow: none
}
.ui.teal.button:focus,
.ui.teal.buttons ::slotted(.button:focus) {
  background-color: #008c86;
  color: #fff;
  text-shadow: none
}
.ui.teal.button:active,
.ui.teal.buttons ::slotted(.button:active) {
  background-color: #00827c;
  color: #fff;
  text-shadow: none
}
.ui.teal.active.button,
.ui.teal.button ::slotted(.active.button:active),
.ui.teal.buttons ::slotted(.active.button),
.ui.teal.buttons ::slotted(.active.button:active) {
  background-color: #009c95;
  color: #fff;
  text-shadow: none
}
.ui.basic.teal.button,
.ui.basic.teal.buttons ::slotted(.button) {
  box-shadow: 0 0 0 1px #00b5ad inset!important;
  color: #00b5ad!important
}
.ui.basic.teal.button:hover,
.ui.basic.teal.buttons ::slotted(.button:hover) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #009c95 inset!important;
  color: #009c95!important
}
.ui.basic.teal.button:focus,
.ui.basic.teal.buttons ::slotted(.button:focus) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #008c86 inset!important;
  color: #009c95!important
}
.ui.basic.teal.active.button,
.ui.basic.teal.buttons ::slotted(.active.button) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #009c95 inset!important;
  color: #00827c!important
}
.ui.basic.teal.button:active,
.ui.basic.teal.buttons ::slotted(.button:active) {
  box-shadow: 0 0 0 1px #00827c inset!important;
  color: #00827c!important
}
.ui.buttons:not(.vertical) > .basic.teal.button:not(:first-child) {
  margin-left: -1px
}
.ui.inverted.teal.button,
.ui.inverted.teal.buttons ::slotted(.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px #6dffff inset!important;
  color: #6dffff
}
.ui.inverted.teal.button.active,
.ui.inverted.teal.button:active,
.ui.inverted.teal.button:focus,
.ui.inverted.teal.button:hover,
.ui.inverted.teal.buttons ::slotted(.button.active),
.ui.inverted.teal.buttons ::slotted(.button:active),
.ui.inverted.teal.buttons ::slotted(.button:focus),
.ui.inverted.teal.buttons ::slotted(.button:hover) {
  box-shadow: none!important;
  color: rgba(0,0,0,.6)
}
.ui.inverted.teal.button:hover,
.ui.inverted.teal.buttons ::slotted(.button:hover) {
  background-color: #54ffff
}
.ui.inverted.teal.button:focus,
.ui.inverted.teal.buttons ::slotted(.button:focus) {
  background-color: #4ff
}
.ui.inverted.teal.active.button,
.ui.inverted.teal.buttons ::slotted(.active.button) {
  background-color: #54ffff
}
.ui.inverted.teal.button:active,
.ui.inverted.teal.buttons ::slotted(.button:active) {
  background-color: #3affff
}
.ui.inverted.teal.basic.button,
.ui.inverted.teal.basic.buttons ::slotted(.button),
.ui.inverted.teal.buttons ::slotted(.basic.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px rgba(255,255,255,.5) inset!important;
  color: #fff!important
}
.ui.inverted.teal.basic.button:hover,
.ui.inverted.teal.basic.buttons ::slotted(.button:hover),
.ui.inverted.teal.buttons ::slotted(.basic.button:hover) {
  box-shadow: 0 0 0 2px #54ffff inset!important;
  color: #6dffff!important
}
.ui.inverted.teal.basic.button:focus,
.ui.inverted.teal.basic.buttons ::slotted(.button:focus) {
  box-shadow: 0 0 0 2px #4ff inset!important;
  color: #6dffff!important
}
.ui.inverted.teal.basic.active.button,
.ui.inverted.teal.basic.buttons ::slotted(.active.button),
.ui.inverted.teal.buttons ::slotted(.basic.active.button) {
  box-shadow: 0 0 0 2px #54ffff inset!important;
  color: #6dffff!important
}
.ui.inverted.teal.basic.button:active,
.ui.inverted.teal.basic.buttons ::slotted(.button:active),
.ui.inverted.teal.buttons ::slotted(.basic.button:active) {
  box-shadow: 0 0 0 2px #3affff inset!important;
  color: #6dffff!important
}
.ui.olive.button,
.ui.olive.buttons ::slotted(.button) {
  background-color: #b5cc18;
  color: #fff;
  text-shadow: none;
  background-image: none
}
.ui.olive.button {
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.olive.button:hover,
.ui.olive.buttons ::slotted(.button:hover) {
  background-color: #a7bd0d;
  color: #fff;
  text-shadow: none
}
.ui.olive.button:focus,
.ui.olive.buttons ::slotted(.button:focus) {
  background-color: #a0b605;
  color: #fff;
  text-shadow: none
}
.ui.olive.button:active,
.ui.olive.buttons ::slotted(.button:active) {
  background-color: #8d9e13;
  color: #fff;
  text-shadow: none
}
.ui.olive.active.button,
.ui.olive.button ::slotted(.active.button:active),
.ui.olive.buttons ::slotted(.active.button),
.ui.olive.buttons ::slotted(.active.button:active) {
  background-color: #aac109;
  color: #fff;
  text-shadow: none
}
.ui.basic.olive.button,
.ui.basic.olive.buttons ::slotted(.button) {
  box-shadow: 0 0 0 1px #b5cc18 inset!important;
  color: #b5cc18!important
}
.ui.basic.olive.button:hover,
.ui.basic.olive.buttons ::slotted(.button:hover) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #a7bd0d inset!important;
  color: #a7bd0d!important
}
.ui.basic.olive.button:focus,
.ui.basic.olive.buttons ::slotted(.button:focus) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #a0b605 inset!important;
  color: #a7bd0d!important
}
.ui.basic.olive.active.button,
.ui.basic.olive.buttons ::slotted(.active.button) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #aac109 inset!important;
  color: #8d9e13!important
}
.ui.basic.olive.button:active,
.ui.basic.olive.buttons ::slotted(.button:active) {
  box-shadow: 0 0 0 1px #8d9e13 inset!important;
  color: #8d9e13!important
}
.ui.buttons:not(.vertical) > .basic.olive.button:not(:first-child) {
  margin-left: -1px
}
.ui.inverted.olive.button,
.ui.inverted.olive.buttons ::slotted(.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px #d9e778 inset!important;
  color: #d9e778
}
.ui.inverted.olive.button.active,
.ui.inverted.olive.button:active,
.ui.inverted.olive.button:focus,
.ui.inverted.olive.button:hover,
.ui.inverted.olive.buttons ::slotted(.button.active),
.ui.inverted.olive.buttons ::slotted(.button:active),
.ui.inverted.olive.buttons ::slotted(.button:focus),
.ui.inverted.olive.buttons ::slotted(.button:hover) {
  box-shadow: none!important;
  color: rgba(0,0,0,.6)
}
.ui.inverted.olive.button:hover,
.ui.inverted.olive.buttons ::slotted(.button:hover) {
  background-color: #d8ea5c
}
.ui.inverted.olive.button:focus,
.ui.inverted.olive.buttons ::slotted(.button:focus) {
  background-color: #daef47
}
.ui.inverted.olive.active.button,
.ui.inverted.olive.buttons ::slotted(.active.button) {
  background-color: #daed59
}
.ui.inverted.olive.button:active,
.ui.inverted.olive.buttons ::slotted(.button:active) {
  background-color: #cddf4d
}
.ui.inverted.olive.basic.button,
.ui.inverted.olive.basic.buttons ::slotted(.button),
.ui.inverted.olive.buttons ::slotted(.basic.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px rgba(255,255,255,.5) inset!important;
  color: #fff!important
}
.ui.inverted.olive.basic.button:hover,
.ui.inverted.olive.basic.buttons ::slotted(.button:hover),
.ui.inverted.olive.buttons ::slotted(.basic.button:hover) {
  box-shadow: 0 0 0 2px #d8ea5c inset!important;
  color: #d9e778!important
}
.ui.inverted.olive.basic.button:focus,
.ui.inverted.olive.basic.buttons ::slotted(.button:focus) {
  box-shadow: 0 0 0 2px #daef47 inset!important;
  color: #d9e778!important
}
.ui.inverted.olive.basic.active.button,
.ui.inverted.olive.basic.buttons ::slotted(.active.button),
.ui.inverted.olive.buttons ::slotted(.basic.active.button) {
  box-shadow: 0 0 0 2px #daed59 inset!important;
  color: #d9e778!important
}
.ui.inverted.olive.basic.button:active,
.ui.inverted.olive.basic.buttons ::slotted(.button:active),
.ui.inverted.olive.buttons ::slotted(.basic.button:active) {
  box-shadow: 0 0 0 2px #cddf4d inset!important;
  color: #d9e778!important
}
.ui.yellow.button,
.ui.yellow.buttons ::slotted(.button) {
  background-color: #fbbd08;
  color: #fff;
  text-shadow: none;
  background-image: none
}
.ui.yellow.button {
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.yellow.button:hover,
.ui.yellow.buttons ::slotted(.button:hover) {
  background-color: #eaae00;
  color: #fff;
  text-shadow: none
}
.ui.yellow.button:focus,
.ui.yellow.buttons ::slotted(.button:focus) {
  background-color: #daa300;
  color: #fff;
  text-shadow: none
}
.ui.yellow.button:active,
.ui.yellow.buttons ::slotted(.button:active) {
  background-color: #cd9903;
  color: #fff;
  text-shadow: none
}
.ui.yellow.active.button,
.ui.yellow.button ::slotted(.active.button:active),
.ui.yellow.buttons ::slotted(.active.button),
.ui.yellow.buttons ::slotted(.active.button:active) {
  background-color: #eaae00;
  color: #fff;
  text-shadow: none
}
.ui.basic.yellow.button,
.ui.basic.yellow.buttons ::slotted(.button) {
  box-shadow: 0 0 0 1px #fbbd08 inset!important;
  color: #fbbd08!important
}
.ui.basic.yellow.button:hover,
.ui.basic.yellow.buttons ::slotted(.button:hover) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #eaae00 inset!important;
  color: #eaae00!important
}
.ui.basic.yellow.button:focus,
.ui.basic.yellow.buttons ::slotted(.button:focus) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #daa300 inset!important;
  color: #eaae00!important
}
.ui.basic.yellow.active.button,
.ui.basic.yellow.buttons ::slotted(.active.button) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #eaae00 inset!important;
  color: #cd9903!important
}
.ui.basic.yellow.button:active,
.ui.basic.yellow.buttons ::slotted(.button:active) {
  box-shadow: 0 0 0 1px #cd9903 inset!important;
  color: #cd9903!important
}
.ui.buttons:not(.vertical) > .basic.yellow.button:not(:first-child) {
  margin-left: -1px
}
.ui.inverted.yellow.button,
.ui.inverted.yellow.buttons ::slotted(.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px #ffe21f inset!important;
  color: #ffe21f
}
.ui.inverted.yellow.button.active,
.ui.inverted.yellow.button:active,
.ui.inverted.yellow.button:focus,
.ui.inverted.yellow.button:hover,
.ui.inverted.yellow.buttons ::slotted(.button.active),
.ui.inverted.yellow.buttons ::slotted(.button:active),
.ui.inverted.yellow.buttons ::slotted(.button:focus),
.ui.inverted.yellow.buttons ::slotted(.button:hover) {
  box-shadow: none!important;
  color: rgba(0,0,0,.6)
}
.ui.inverted.yellow.button:hover,
.ui.inverted.yellow.buttons ::slotted(.button:hover) {
  background-color: #ffdf05
}
.ui.inverted.yellow.button:focus,
.ui.inverted.yellow.buttons ::slotted(.button:focus) {
  background-color: #f5d500
}
.ui.inverted.yellow.active.button,
.ui.inverted.yellow.buttons ::slotted(.active.button) {
  background-color: #ffdf05
}
.ui.inverted.yellow.button:active,
.ui.inverted.yellow.buttons ::slotted(.button:active) {
  background-color: #ebcd00
}
.ui.inverted.yellow.basic.button,
.ui.inverted.yellow.basic.buttons ::slotted(.button),
.ui.inverted.yellow.buttons ::slotted(.basic.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px rgba(255,255,255,.5) inset!important;
  color: #fff!important
}
.ui.inverted.yellow.basic.button:hover,
.ui.inverted.yellow.basic.buttons ::slotted(.button:hover),
.ui.inverted.yellow.buttons ::slotted(.basic.button:hover) {
  box-shadow: 0 0 0 2px #ffdf05 inset!important;
  color: #ffe21f!important
}
.ui.inverted.yellow.basic.button:focus,
.ui.inverted.yellow.basic.buttons ::slotted(.button:focus) {
  box-shadow: 0 0 0 2px #f5d500 inset!important;
  color: #ffe21f!important
}
.ui.inverted.yellow.basic.active.button,
.ui.inverted.yellow.basic.buttons ::slotted(.active.button),
.ui.inverted.yellow.buttons ::slotted(.basic.active.button) {
  box-shadow: 0 0 0 2px #ffdf05 inset!important;
  color: #ffe21f!important
}
.ui.inverted.yellow.basic.button:active,
.ui.inverted.yellow.basic.buttons ::slotted(.button:active),
.ui.inverted.yellow.buttons ::slotted(.basic.button:active) {
  box-shadow: 0 0 0 2px #ebcd00 inset!important;
  color: #ffe21f!important
}
.ui.primary.button,
.ui.primary.buttons ::slotted(.button) {
  background-color: #2185d0;
  color: #fff;
  text-shadow: none;
  background-image: none
}
.ui.primary.button {
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.primary.button:hover,
.ui.primary.buttons ::slotted(.button:hover) {
  background-color: #1678c2;
  color: #fff;
  text-shadow: none
}
.ui.primary.button:focus,
.ui.primary.buttons ::slotted(.button:focus) {
  background-color: #0d71bb;
  color: #fff;
  text-shadow: none
}
.ui.primary.button:active,
.ui.primary.buttons ::slotted(.button:active) {
  background-color: #1a69a4;
  color: #fff;
  text-shadow: none
}
.ui.primary.active.button,
.ui.primary.button ::slotted(.active.button:active),
.ui.primary.buttons ::slotted(.active.button),
.ui.primary.buttons ::slotted(.active.button:active) {
  background-color: #1279c6;
  color: #fff;
  text-shadow: none
}
.ui.basic.primary.button,
.ui.basic.primary.buttons ::slotted(.button) {
  box-shadow: 0 0 0 1px #2185d0 inset!important;
  color: #2185d0!important
}
.ui.basic.primary.button:hover,
.ui.basic.primary.buttons ::slotted(.button:hover) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #1678c2 inset!important;
  color: #1678c2!important
}
.ui.basic.primary.button:focus,
.ui.basic.primary.buttons ::slotted(.button:focus) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #0d71bb inset!important;
  color: #1678c2!important
}
.ui.basic.primary.active.button,
.ui.basic.primary.buttons ::slotted(.active.button) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #1279c6 inset!important;
  color: #1a69a4!important
}
.ui.basic.primary.button:active,
.ui.basic.primary.buttons ::slotted(.button:active) {
  box-shadow: 0 0 0 1px #1a69a4 inset!important;
  color: #1a69a4!important
}
.ui.buttons:not(.vertical) > ::slotted(.basic.primary.button:not(:first-child)) {
  margin-left: -1px
}
.ui.inverted.primary.button,
.ui.inverted.primary.buttons ::slotted(.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px #54c8ff inset!important;
  color: #54c8ff
}
.ui.inverted.primary.button.active,
.ui.inverted.primary.button:active,
.ui.inverted.primary.button:focus,
.ui.inverted.primary.button:hover,
.ui.inverted.primary.buttons ::slotted(.button.active),
.ui.inverted.primary.buttons ::slotted(.button:active),
.ui.inverted.primary.buttons ::slotted(.button:focus),
.ui.inverted.primary.buttons ::slotted(.button:hover) {
  box-shadow: none!important;
  color: #fff
}
.ui.inverted.primary.button:hover,
.ui.inverted.primary.buttons ::slotted(.button:hover) {
  background-color: #3ac0ff
}
.ui.inverted.primary.button:focus,
.ui.inverted.primary.buttons ::slotted(.button:focus) {
  background-color: #2bbbff
}
.ui.inverted.primary.active.button,
.ui.inverted.primary.buttons ::slotted(.active.button) {
  background-color: #3ac0ff
}
.ui.inverted.primary.button:active,
.ui.inverted.primary.buttons ::slotted(.button:active) {
  background-color: #21b8ff
}
.ui.inverted.primary.basic.button,
.ui.inverted.primary.basic.buttons ::slotted(.button),
.ui.inverted.primary.buttons ::slotted(.basic.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px rgba(255,255,255,.5) inset!important;
  color: #fff!important
}
.ui.inverted.primary.basic.button:hover,
.ui.inverted.primary.basic.buttons ::slotted(.button:hover),
.ui.inverted.primary.buttons ::slotted(.basic.button:hover) {
  box-shadow: 0 0 0 2px #3ac0ff inset!important;
  color: #54c8ff!important
}
.ui.inverted.primary.basic.button:focus,
.ui.inverted.primary.basic.buttons ::slotted(.button:focus) {
  box-shadow: 0 0 0 2px #2bbbff inset!important;
  color: #54c8ff!important
}
.ui.inverted.primary.basic.active.button,
.ui.inverted.primary.basic.buttons ::slotted(.active.button),
.ui.inverted.primary.buttons ::slotted(.basic.active.button) {
  box-shadow: 0 0 0 2px #3ac0ff inset!important;
  color: #54c8ff!important
}
.ui.inverted.primary.basic.button:active,
.ui.inverted.primary.basic.buttons ::slotted(.button:active),
.ui.inverted.primary.buttons ::slotted(.basic.button:active) {
  box-shadow: 0 0 0 2px #21b8ff inset!important;
  color: #54c8ff!important
}
.ui.secondary.button,
.ui.secondary.buttons ::slotted(.button) {
  background-color: #1b1c1d;
  color: #fff;
  text-shadow: none;
  background-image: none
}
.ui.secondary.button {
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.secondary.button:hover,
.ui.secondary.buttons ::slotted(.button:hover) {
  background-color: #27292a;
  color: #fff;
  text-shadow: none
}
.ui.secondary.button:focus,
.ui.secondary.buttons ::slotted(.button:focus) {
  background-color: #2e3032;
  color: #fff;
  text-shadow: none
}
.ui.secondary.button:active,
.ui.secondary.buttons ::slotted(.button:active) {
  background-color: #343637;
  color: #fff;
  text-shadow: none
}
.ui.secondary.active.button,
.ui.secondary.button ::slotted(.active.button:active),
.ui.secondary.buttons ::slotted(.active.button),
.ui.secondary.buttons ::slotted(.active.button:active) {
  background-color: #27292a;
  color: #fff;
  text-shadow: none
}
.ui.basic.secondary.button,
.ui.basic.secondary.buttons ::slotted(.button) {
  box-shadow: 0 0 0 1px #1b1c1d inset!important;
  color: #1b1c1d!important
}
.ui.basic.secondary.button:hover,
.ui.basic.secondary.buttons ::slotted(.button:hover) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #27292a inset!important;
  color: #27292a!important
}
.ui.basic.secondary.button:focus,
.ui.basic.secondary.buttons ::slotted(.button:focus) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #2e3032 inset!important;
  color: #27292a!important
}
.ui.basic.secondary.active.button,
.ui.basic.secondary.buttons ::slotted(.active.button) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #27292a inset!important;
  color: #343637!important
}
.ui.basic.secondary.button:active,
.ui.basic.secondary.buttons ::slotted(.button:active) {
  box-shadow: 0 0 0 1px #343637 inset!important;
  color: #343637!important
}
.ui.buttons:not(.vertical) > ::slotted(.basic.primary.button:not(:first-child)) {
  margin-left: -1px
}
.ui.inverted.secondary.button,
.ui.inverted.secondary.buttons ::slotted(.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px #545454 inset!important;
  color: #545454
}
.ui.inverted.secondary.button.active,
.ui.inverted.secondary.button:active,
.ui.inverted.secondary.button:focus,
.ui.inverted.secondary.button:hover,
.ui.inverted.secondary.buttons ::slotted(.button.active),
.ui.inverted.secondary.buttons ::slotted(.button:active),
.ui.inverted.secondary.buttons ::slotted(.button:focus),
.ui.inverted.secondary.buttons ::slotted(.button:hover) {
  box-shadow: none!important;
  color: #fff
}
.ui.inverted.secondary.button:hover,
.ui.inverted.secondary.buttons ::slotted(.button:hover) {
  background-color: #616161
}
.ui.inverted.secondary.button:focus,
.ui.inverted.secondary.buttons ::slotted(.button:focus) {
  background-color: #686868
}
.ui.inverted.secondary.active.button,
.ui.inverted.secondary.buttons ::slotted(.active.button) {
  background-color: #616161
}
.ui.inverted.secondary.button:active,
.ui.inverted.secondary.buttons ::slotted(.button:active) {
  background-color: #6e6e6e
}
.ui.inverted.secondary.basic.button,
.ui.inverted.secondary.basic.buttons ::slotted(.button),
.ui.inverted.secondary.buttons ::slotted(.basic.button) {
  background-color: transparent;
  box-shadow: 0 0 0 2px rgba(255,255,255,.5) inset!important;
  color: #fff!important
}
.ui.inverted.secondary.basic.button:hover,
.ui.inverted.secondary.basic.buttons ::slotted(.button:hover),
.ui.inverted.secondary.buttons ::slotted(.basic.button:hover) {
  box-shadow: 0 0 0 2px #616161 inset!important;
  color: #545454!important
}
.ui.inverted.secondary.basic.button:focus,
.ui.inverted.secondary.basic.buttons ::slotted(.button:focus) {
  box-shadow: 0 0 0 2px #686868 inset!important;
  color: #545454!important
}
.ui.inverted.secondary.basic.active.button,
.ui.inverted.secondary.basic.buttons ::slotted(.active.button),
.ui.inverted.secondary.buttons ::slotted(.basic.active.button) {
  box-shadow: 0 0 0 2px #616161 inset!important;
  color: #545454!important
}
.ui.inverted.secondary.basic.button:active,
.ui.inverted.secondary.basic.buttons ::slotted(.button:active),
.ui.inverted.secondary.buttons ::slotted(.basic.button:active) {
  box-shadow: 0 0 0 2px #6e6e6e inset!important;
  color: #545454!important
}
.ui.positive.button,
.ui.positive.buttons ::slotted(.button) {
  background-color: #21ba45;
  color: #fff;
  text-shadow: none;
  background-image: none
}
.ui.positive.button {
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.positive.button:hover,
.ui.positive.buttons ::slotted(.button:hover) {
  background-color: #16ab39;
  color: #fff;
  text-shadow: none
}
.ui.positive.button:focus,
.ui.positive.buttons ::slotted(.button:focus) {
  background-color: #0ea432;
  color: #fff;
  text-shadow: none
}
.ui.positive.button:active,
.ui.positive.buttons ::slotted(.button:active) {
  background-color: #198f35;
  color: #fff;
  text-shadow: none
}
.ui.positive.active.button,
.ui.positive.button ::slotted(.active.button:active),
.ui.positive.buttons ::slotted(.active.button),
.ui.positive.buttons ::slotted(.active.button:active) {
  background-color: #13ae38;
  color: #fff;
  text-shadow: none
}
.ui.basic.positive.button,
.ui.basic.positive.buttons ::slotted(.button) {
  box-shadow: 0 0 0 1px #21ba45 inset!important;
  color: #21ba45!important
}
.ui.basic.positive.button:hover,
.ui.basic.positive.buttons ::slotted(.button:hover) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #16ab39 inset!important;
  color: #16ab39!important
}
.ui.basic.positive.button:focus,
.ui.basic.positive.buttons ::slotted(.button:focus) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #0ea432 inset!important;
  color: #16ab39!important
}
.ui.basic.positive.active.button,
.ui.basic.positive.buttons ::slotted(.active.button) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #13ae38 inset!important;
  color: #198f35!important
}
.ui.basic.positive.button:active,
.ui.basic.positive.buttons ::slotted(.button:active) {
  box-shadow: 0 0 0 1px #198f35 inset!important;
  color: #198f35!important
}
.ui.buttons:not(.vertical) > ::slotted(.basic.primary.button:not(:first-child)) {
  margin-left: -1px
}
.ui.negative.button,
.ui.negative.buttons ::slotted(.button) {
  background-color: #db2828;
  color: #fff;
  text-shadow: none;
  background-image: none
}
.ui.negative.button {
  box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.negative.button:hover,
.ui.negative.buttons ::slotted(.button:hover) {
  background-color: #d01919;
  color: #fff;
  text-shadow: none
}
.ui.negative.button:focus,
.ui.negative.buttons ::slotted(.button:focus) {
  background-color: #ca1010;
  color: #fff;
  text-shadow: none
}
.ui.negative.button:active,
.ui.negative.buttons ::slotted(.button:active) {
  background-color: #b21e1e;
  color: #fff;
  text-shadow: none
}
.ui.negative.active.button,
.ui.negative.button ::slotted(.active.button:active),
.ui.negative.buttons ::slotted(.active.button),
.ui.negative.buttons ::slotted(.active.button:active) {
  background-color: #d41515;
  color: #fff;
  text-shadow: none
}
.ui.basic.negative.button,
.ui.basic.negative.buttons ::slotted(.button) {
  box-shadow: 0 0 0 1px #db2828 inset!important;
  color: #db2828!important
}
.ui.basic.negative.button:hover,
.ui.basic.negative.buttons ::slotted(.button:hover) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #d01919 inset!important;
  color: #d01919!important
}
.ui.basic.negative.button:focus,
.ui.basic.negative.buttons ::slotted(.button:focus) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #ca1010 inset!important;
  color: #d01919!important
}
.ui.basic.negative.active.button,
.ui.basic.negative.buttons ::slotted(.active.button) {
  background: 0 0!important;
  box-shadow: 0 0 0 1px #d41515 inset!important;
  color: #b21e1e!important
}
.ui.basic.negative.button:active,
.ui.basic.negative.buttons ::slotted(.button:active) {
  box-shadow: 0 0 0 1px #b21e1e inset!important;
  color: #b21e1e!important
}
.ui.buttons:not(.vertical) > ::slotted(.basic.primary.button:not(:first-child)) {
  margin-left: -1px
}
.ui.buttons {
  display: inline-flex;
  flex-direction: row;
  font-size: 0;
  vertical-align: baseline;
  margin: 0 .25em 0 0
}
.ui.buttons:not(.basic):not(.inverted) {
  box-shadow: none
}
.ui.buttons:after {
  content: '.';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden
}
.ui.buttons ::slotted(.button) {
  flex: 1 0 auto;
  margin: 0;
  border-radius: 0;
  margin: 0
}
.ui.buttons > ::slotted(.ui.button:not(.basic):not(.inverted)),
.ui.buttons:not(.basic):not(.inverted) > ::slotted(.button) {
  box-shadow: 0 0 0 1px transparent inset,0 0 0 0 rgba(34,36,38,.15) inset
}
.ui.buttons ::slotted(.button:first-child) {
  border-left: none;
  margin-left: 0;
  border-top-left-radius: .28571429rem;
  border-bottom-left-radius: .28571429rem
}
.ui.buttons ::slotted(.button:last-child) {
  border-top-right-radius: .28571429rem;
  border-bottom-right-radius: .28571429rem
}
.ui.vertical.buttons {
  display: inline-flex;
  flex-direction: column
}
.ui.vertical.buttons ::slotted(.button) {
  display: block;
  float: none;
  width: 100%;
  margin: 0;
  box-shadow: none;
  border-radius: 0
}
.ui.vertical.buttons ::slotted(.button:first-child) {
  border-top-left-radius: .28571429rem;
  border-top-right-radius: .28571429rem
}
.ui.vertical.buttons ::slotted(.button:last-child) {
  margin-bottom: 0;
  border-bottom-left-radius: .28571429rem;
  border-bottom-right-radius: .28571429rem
}
.ui.vertical.buttons ::slotted(.button:only-child) {
  border-radius: .28571429rem
}`;
