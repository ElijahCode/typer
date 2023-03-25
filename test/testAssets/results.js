export const resultSimpleObj = {
  a: "string",
  b: false,
  c: null,
  d: undefined,
  e: true,
  f: 12345,
};

export const resultSimpleArray = [
  "string",
  false,
  null,
  undefined,
  true,
  12345,
];

export const resultHardObject = {
  a: {
    a: "string",
    b: false,
    c: null,
    d: undefined,
    e: true,
    f: 12345,
  },
  b: {
    c: {
      a: "string",
      b: false,
      c: null,
      d: undefined,
      e: true,
      f: 12345,
    },
  },
  c: {
    d: {
      e: {
        a: "string",
        b: false,
        c: null,
        d: undefined,
        e: true,
        f: 12345,
      },
    },
  },
  d: {
    e: {
      f: {
        g: {
          a: "string",
          b: false,
          c: null,
          d: undefined,
          e: true,
          f: 12345,
        },
      },
    },
  },
};

export const resultHardArray = [
  ["string", false, null, undefined, true, 12345],
  [
    ["string", false, null, undefined, true, 12345],
    [[["string", false, null, undefined, true, 12345]]],
  ],
  [
    ["string", false, null, undefined, true, 12345],
    [["string", false, null, undefined, true, 12345]],
    [[["string", false, null, undefined, true, 12345]]],
  ],
  ["string", false, null, undefined, true, 12345],
  [["string", false, null, undefined, true, 12345]],
  [[["string", false, null, undefined, true, 12345]]],
  [[[["string", false, null, undefined, true, 12345]]]],
  [[[[["string", false, null, undefined, true, 12345]]]]],
];

export const resultFirstComplicated = {
  a: {
    a: "string",
    b: false,
    c: null,
    d: undefined,
    e: true,
    f: 12345,
  },
  b: {
    a: ["string", false, null, undefined, true, 12345],
    b: {
      a: "string",
      b: false,
      c: null,
      d: undefined,
      e: true,
      f: 12345,
    },
  },
  c: [
    {
      a: "string",
      b: false,
      c: null,
      d: undefined,
      e: true,
      f: 12345,
      g: ["string", false, null, undefined, true, 12345],
    },
    [
      "string",
      false,
      null,
      undefined,
      true,
      12345,
      {
        a: "string",
        b: false,
        c: null,
        d: undefined,
        e: true,
        f: 12345,
      },
    ],
  ],
  d: {
    a: {
      b: {
        a: "string",
        b: false,
        c: null,
        d: undefined,
        e: true,
        f: 12345,
        g: ["string", false, null, undefined, true, 12345],
      },
      c: [
        "string",
        false,
        null,
        undefined,
        true,
        12345,
        {
          a: "string",
          b: false,
          c: null,
          d: undefined,
          e: true,
          f: 12345,
          g: ["string", false, null, undefined, true, 12345],
        },
      ],
    },
  },
};
