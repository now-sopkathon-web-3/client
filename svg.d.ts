declare module '*.svg' {
  import React = require('react');

  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}
