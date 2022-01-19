import React from 'react';

export const Sociate_fb = React.memo(function Sociate_fb(props) {
    return (
        <a href={props.href} target='_blank' className={props.style}>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                <g fill="none" fillRule="evenodd">
                    <g fill="#FFF" fillRule="nonzero">
                        <g>
                            <g>
                                <path d="M14.875 0C16.047 0 17 .953 17 2.125v12.75C17 16.047 16.047 17 14.875 17H2.125C.953 17 0 16.047 0 14.875V2.125C0 .953.953 0 2.125 0zm-1.063 3.188h-2.124C9.927 3.188 8.5 4.614 8.5 6.374V8.5H6.375v2.656H8.5V17h3.188v-5.844h1.593L14.344 8.5h-2.656V6.375c0-.547.414-.536.946-.532h1.178V3.189z" transform="translate(-1368 -10) translate(14 10) translate(1354)" />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </a>
    );
});
export const Sociate_tube = React.memo(function Sociate_tube(props) {
    return (
        <a href={props.href} target='_blank' className={props.style}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" viewBox="0 0 25 18">
                <g fill="none" fillRule="evenodd">
                    <g fill="#FFF" fillRule="nonzero">
                        <g>
                            <g>
                                <path d="M13.209 0c3.081.006 6.426.05 7.816.144 1.498.084 2.234.306 2.913 1.512C24.643 2.861 25 4.936 25 8.591v.012c0 3.638-.356 5.728-1.06 6.92-.68 1.207-1.415 1.425-2.913 1.527-1.178.068-3.754.114-6.385.13l-.719.004-1.42.003h-.352c-.471 0-.95-.002-1.43-.004l-.718-.005c-2.508-.019-4.907-.064-6.03-.13-1.495-.101-2.23-.32-2.915-1.526C.359 14.33 0 12.239 0 8.602v-.013c0-3.653.36-5.728 1.058-6.933C1.742.448 2.48.228 3.975.142 5.364.05 8.71.006 11.796.001zM9.375 3.907v9.375l7.813-4.687-7.813-4.688z" transform="translate(-1401 -10) translate(14 10) translate(1387)" />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </a>
    );
});


