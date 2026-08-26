export default function HelloKitty({ waving }) {
    return (
      <div
        className={`kitty ${waving ? "waving" : ""}`}
        data-testid="hello-kitty-character"
      >
        <div
          className={`kitty-bubble ${waving ? "show" : ""}`}
          data-testid="kitty-speech-bubble"
        >
          hiii u have a pretty smile &lt;3
        </div>
  
        <svg
          viewBox="0 0 140 165"
          className="kitty-svg"
          role="img"
          aria-label="Hello Kitty waving"
        >
          <ellipse
            cx="54"
            cy="150"
            rx="15"
            ry="8.5"
            className="k-outline"
            fill="#fff"
          />
  
          <ellipse
            cx="90"
            cy="150"
            rx="15"
            ry="8.5"
            className="k-outline"
            fill="#fff"
          />
  
          <ellipse
            cx="34"
            cy="120"
            rx="9"
            ry="15"
            transform="rotate(24 34 120)"
            className="k-outline"
            fill="#fff"
          />
  
          <path
            d="M46 104 h48 a12 12 0 0 1 12 12 v16 a12 12 0 0 1 -12 12 H46 a12 12 0 0 1 -12 -12 v-16 a12 12 0 0 1 12 -12 Z"
            fill="#6E9BD1"
            className="k-outline"
          />
  
          <rect
            x="52"
            y="98"
            width="9"
            height="18"
            rx="4"
            fill="#6E9BD1"
            className="k-outline"
          />
  
          <rect
            x="79"
            y="98"
            width="9"
            height="18"
            rx="4"
            fill="#6E9BD1"
            className="k-outline"
          />
  
          <circle
            cx="56"
            cy="122"
            r="3"
            fill="#F4C430"
            stroke="#2b2b2b"
            strokeWidth="1.6"
          />
  
          <circle
            cx="84"
            cy="122"
            r="3"
            fill="#F4C430"
            stroke="#2b2b2b"
            strokeWidth="1.6"
          />
  
          <g className="arm-wave">
            <ellipse
              cx="108"
              cy="118"
              rx="9"
              ry="15"
              transform="rotate(-18 108 118)"
              className="k-outline"
              fill="#fff"
            />
          </g>
  
          <g>
            <path
              d="M34 36 L22 10 Q20 3 28 7 L50 20 Z"
              fill="#fff"
              className="k-outline"
            />
  
            <path
              d="M106 36 L118 10 Q120 3 112 7 L90 20 Z"
              fill="#fff"
              className="k-outline"
            />
  
            <path
              d="M70 18 C40 18 22 38 22 62 C22 86 42 100 70 100 C98 100 118 86 118 62 C118 38 100 18 70 18 Z"
              fill="#fff"
              className="k-outline"
            />
  
            <ellipse
              cx="50"
              cy="60"
              rx="4"
              ry="6.5"
              fill="#2b2b2b"
            />
  
            <ellipse
              cx="90"
              cy="60"
              rx="4"
              ry="6.5"
              fill="#2b2b2b"
            />
  
            <ellipse
              cx="70"
              cy="70"
              rx="6"
              ry="4.6"
              fill="#F4C430"
              stroke="#2b2b2b"
              strokeWidth="2"
            />
  
            <path
              d="M4 54 L26 59 M4 68 L26 66 M6 82 L28 74"
              className="k-whisker"
            />
  
            <path
              d="M136 54 L114 59 M136 68 L114 66 M134 82 L112 74"
              className="k-whisker"
            />
  
            <g transform="translate(27 14) rotate(-12)">
              <ellipse
                cx="-9"
                cy="0"
                rx="10"
                ry="7.5"
                fill="#E85D75"
                stroke="#2b2b2b"
                strokeWidth="2.4"
              />
  
              <ellipse
                cx="9"
                cy="0"
                rx="10"
                ry="7.5"
                fill="#E85D75"
                stroke="#2b2b2b"
                strokeWidth="2.4"
              />
  
              <circle
                r="4.6"
                fill="#E85D75"
                stroke="#2b2b2b"
                strokeWidth="2.4"
              />
            </g>
          </g>
        </svg>
      </div>
    );
  }