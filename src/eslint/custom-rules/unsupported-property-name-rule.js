/*
 ********************************************************************
 * Licensed Materials - Property of HCL                             *
 *                                                                  *
 * Copyright HCL Technologies Ltd. 2025. All Rights Reserved.       *
 *                                                                  *
 * Note to US Government Users Restricted Rights:                   *
 *                                                                  *
 * Use, duplication or disclosure restricted by GSA ADP Schedule    *
 ********************************************************************
 */
// https://html.spec.whatwg.org/multipage/dom.html#global-attributes
const UNSUPPORTED_PROPERTY_NAMES = [
  'accesskey', 
  'autocapitalize',
  'autocorrect',
  'autofocus',
  'contenteditable',
  'dir',
  'draggable',
  'enterkeyhint',
  'headingoffset',
  'headingreset',
  'hidden', 
  'inert',
  'inputmode',
  'is',
  'itemid',
  'itemprop',
  'itemref',
  'itemscope',
  'itemtype',
  'lang',
  'nonce',
  'popover',
  'spellcheck',
  'style',
  'tabindex',
  'title',
  'translate',
  'writingsuggestions'
];

export default {
  meta: {
    type: 'suggestion',
    messages: {
      unsupportedPropertyName: `Unsupported property decorator name '{{ name }}'. It may conflict with global attributes.
        Please consider renaming the property and check this link for more information: https://html.spec.whatwg.org/multipage/dom.html#global-attributes`,
    },
    fixable: 'code',
    schema: [], // no options
  },
  create: function (context) {
    return {
      Identifier: function (node) {
        if (node.name === 'property' 
          && node.parent?.parent?.type === 'Decorator' 
          && node.parent?.parent?.parent?.type === 'PropertyDefinition'
        ) {
          if (UNSUPPORTED_PROPERTY_NAMES.includes(node.parent?.parent?.parent?.key?.name)) {
            context.report({
              node,
              messageId: "unsupportedPropertyName",
              data: {
                name: node.parent.parent.parent.key.name,
              },
            });
          }
        }
      },
    };
  },
};
