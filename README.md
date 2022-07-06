# modal-satrana14

> validation message for form

[![NPM](https://img.shields.io/npm/v/modal-satrana14.svg)](https://www.npmjs.com/package/modal-satrana14) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save modal-satrana14
```

or

```bash
yarn add modal-satrana14
```

## Prerequisites

```bash
npm install
```

```bash
yarn add react react-dom
```

## Usage

```
import React, { useState } from 'react';
import { Modal } from 'modal-satrana14';

export const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Background</h1>
      <Modal
        show={modalIsOpen}
        setShow={setModalIsOpen}
        title="Success !"
        text="The new employee has been created"
      />
    </>
  );
};
```

## License
Satrana Ravelojaona