import React from 'react';

export default function Icon({ name, color, size }) {
  switch (name) {
    case 'close':
      return close({ color, size });
    case 'menu':
      return menu({ color, size });
    case 'picture':
      return picture({ color, size });
    case 'download':
      return download({ color, size });
    case 'play':
      return play({ color, size });
    case 'home':
      return home({ color, size });
    default:
      return <>Icon not found</>;
  }
}

const close = ({ color, size }) => (
  <svg
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    width={size || '4vw'}
    height={size || '4vw'}
    viewBox="0 0 294.843 294.843">
    <g fill={color || 'black'}>
      <path
        d="M147.421,0C66.133,0,0,66.133,0,147.421s66.133,147.421,147.421,147.421c38.287,0,74.567-14.609,102.159-41.136
		c2.389-2.296,2.464-6.095,0.167-8.483c-2.295-2.388-6.093-2.464-8.483-0.167c-25.345,24.367-58.672,37.786-93.842,37.786
		C72.75,282.843,12,222.093,12,147.421S72.75,12,147.421,12s135.421,60.75,135.421,135.421c0,16.842-3.052,33.273-9.071,48.835
		c-1.195,3.091,0.341,6.565,3.432,7.761c3.092,1.193,6.565-0.341,7.761-3.432c6.555-16.949,9.879-34.836,9.879-53.165
		C294.843,66.133,228.71,0,147.421,0z"
      />
      <path
        d="M167.619,160.134c-2.37-2.319-6.168-2.277-8.485,0.09c-2.318,2.368-2.277,6.167,0.09,8.485l47.236,46.236
		c1.168,1.143,2.683,1.712,4.197,1.712c1.557,0,3.113-0.603,4.288-1.803c2.318-2.368,2.277-6.167-0.09-8.485L167.619,160.134z"
      />
      <path
        d="M125.178,133.663c1.171,1.171,2.707,1.757,4.243,1.757s3.071-0.586,4.243-1.757c2.343-2.343,2.343-6.142,0-8.485
		L88.428,79.942c-2.343-2.343-6.143-2.343-8.485,0c-2.343,2.343-2.343,6.142,0,8.485L125.178,133.663z"
      />
      <path
        d="M214.9,79.942c-2.343-2.343-6.143-2.343-8.485,0L79.942,206.415c-2.343,2.343-2.343,6.142,0,8.485
		c1.171,1.171,2.707,1.757,4.243,1.757s3.071-0.586,4.243-1.757L214.9,88.428C217.243,86.084,217.243,82.286,214.9,79.942z"
      />
    </g>
  </svg>
);

const menu = ({ color, size }) => (
  <svg
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    width={size || '4vw'}
    height={size || '4vw'}
    viewBox="0 0 294.843 294.843">
    <g fill={color || 'black'}>
      <path
        d="M147.421,0C66.133,0,0,66.133,0,147.421c0,40.968,17.259,80.425,47.351,108.255c2.433,2.25,6.229,2.101,8.479-0.331
		c2.25-2.434,2.102-6.229-0.332-8.479C27.854,221.3,12,185.054,12,147.421C12,72.75,72.75,12,147.421,12
		s135.421,60.75,135.421,135.421s-60.75,135.421-135.421,135.421c-3.313,0-6,2.687-6,6s2.687,6,6,6
		c81.289,0,147.421-66.133,147.421-147.421S228.71,0,147.421,0z"
      />
      <path d="M84.185,90.185h126.473c3.313,0,6-2.687,6-6s-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6S80.872,90.185,84.185,90.185z" />
      <path d="M84.185,153.421h126.473c3.313,0,6-2.687,6-6s-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6S80.872,153.421,84.185,153.421z" />
      <path
        d="M216.658,210.658c0-3.313-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6s2.687,6,6,6h126.473
		C213.971,216.658,216.658,213.971,216.658,210.658z"
      />
    </g>
  </svg>
);

const picture = ({ color, size }) => (
  <svg
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    width={size || '4vw'}
    height={size || '4vw'}
    viewBox="0 0 294.843 294.843">
    <g fill={color || 'black'}>
      <path
        d="M288.842,55.421c-3.313,0-6,2.687-6,6v221.421H12V12h276.842c3.313,0,6-2.687,6-6s-2.687-6-6-6H6C2.687,0,0,2.687,0,6
		v282.842c0,3.313,2.687,6,6,6h282.842c3.313,0,6-2.687,6-6V61.421C294.842,58.107,292.155,55.421,288.842,55.421z"
      />
      <path
        d="M39.12,33.12c-3.313,0-6,2.687-6,6v173.858c0,3.313,2.687,6,6,6h216.602c3.313,0,6-2.687,6-6V39.12c0-3.313-2.687-6-6-6
		H39.12z M45.12,45.12h204.602v152.99l-62.709-62.709c-2.342-2.344-6.143-2.344-8.484,0l-17.321,17.32l-30.916-30.915
		c-2.342-2.344-6.143-2.344-8.484,0l-59.5,59.5c-2.344,2.343-2.344,6.142,0,8.484c2.342,2.344,6.143,2.344,8.484,0l55.258-55.257
		l30.916,30.915c2.342,2.344,6.143,2.344,8.484,0l17.321-17.32l58.85,58.85H45.12V45.12z"
      />
    </g>
  </svg>
);

const download = ({ color, size }) => (
  <svg
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    width={size || '4vw'}
    height={size || '4vw'}
    viewBox="0 0 294.843 294.843">
    <g fill={color || 'black'}>
      <path
        d="M288.843,265.421c-3.313,0-6,2.687-6,6v11.421H12v-39.992h276.842c3.313,0,6-2.687,6-6s-2.687-6-6-6H6
		c-3.313,0-6,2.687-6,6v51.992c0,3.313,2.687,6,6,6h282.842c3.313,0,6-2.687,6-6v-17.421
		C294.843,268.108,292.156,265.421,288.843,265.421z"
      />
      <path
        d="M143.179,203.465c1.125,1.125,2.651,1.757,4.243,1.757c1.591,0,3.117-0.632,4.242-1.757l76.367-76.368
		c2.344-2.343,2.344-6.142,0-8.485c-2.342-2.343-6.143-2.343-8.484,0l-72.125,72.125l-72.125-72.125
		c-2.343-2.343-6.143-2.343-8.485,0c-2.343,2.343-2.343,6.142,0,8.485L143.179,203.465z"
      />
      <path
        d="M147.422,171.421c3.313,0,6-2.687,6-6V6c0-3.313-2.687-6-6-6s-6,2.687-6,6v159.421
		C141.422,168.735,144.108,171.421,147.422,171.421z"
      />
    </g>
  </svg>
);

const play = ({ color, size }) => (
  <svg
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    width={size || '4vw'}
    height={size || '4vw'}
    viewBox="0 0 294.843 294.843">
    <g fill={color || 'black'}>
      <path
        d="M278.527,79.946c-10.324-20.023-25.38-37.704-43.538-51.132c-2.665-1.97-6.421-1.407-8.392,1.257s-1.407,6.421,1.257,8.392
		c16.687,12.34,30.521,28.586,40.008,46.983c9.94,19.277,14.98,40.128,14.98,61.976c0,74.671-60.75,135.421-135.421,135.421
		S12,222.093,12,147.421S72.75,12,147.421,12c3.313,0,6-2.687,6-6s-2.687-6-6-6C66.133,0,0,66.133,0,147.421
		s66.133,147.421,147.421,147.421s147.421-66.133,147.421-147.421C294.842,123.977,289.201,100.645,278.527,79.946z"
      />
      <path
        d="M109.699,78.969c-1.876,1.067-3.035,3.059-3.035,5.216v131.674c0,3.314,2.687,6,6,6s6-2.686,6-6V94.74l88.833,52.883
		l-65.324,42.087c-2.785,1.795-3.589,5.508-1.794,8.293c1.796,2.786,5.508,3.59,8.294,1.794l73.465-47.333
		c1.746-1.125,2.786-3.073,2.749-5.15c-0.037-2.077-1.145-3.987-2.93-5.05L115.733,79.029
		C113.877,77.926,111.575,77.902,109.699,78.969z"
      />
    </g>
  </svg>
);

const home = ({ color, size }) => (
  <svg
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    width={size || '4vw'}
    height={size || '4vw'}
    viewBox="0 0 294.843 294.843">
    <g fill={color || 'black'}>
<path d="M223.779,122.895c-3.313,0-6,2.687-6,6v106.895h-64.384v-67.102c0-3.313-2.687-6-6-6h-47c-3.313,0-6,2.687-6,6v53.207
	c0,3.313,2.687,6,6,6s6-2.687,6-6v-47.207h35v61.102H30.01V88.929l93.884-75.239l96.132,77.04c2.586,2.073,6.362,1.655,8.434-0.93
	c2.072-2.586,1.656-6.361-0.93-8.434L127.646,1.318c-2.192-1.758-5.312-1.758-7.504,0L20.258,81.366
	c-1.421,1.139-2.248,2.86-2.248,4.682v155.741c0,3.313,2.686,6,6,6h199.769c3.314,0,6-2.687,6-6V128.895
	C229.779,125.581,227.093,122.895,223.779,122.895z"/>
</g>
  </svg>
);
