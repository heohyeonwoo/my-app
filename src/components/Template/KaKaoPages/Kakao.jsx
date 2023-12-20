import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled, { ThemeProvider } from "styled-components";

const { kakao } = window;
const KEYWORD_LIST = [
  { id: 1, value: "애견동반카페", emoji: "🥤" },
  { id: 2, value: "동물병원", emoji: "🧑‍⚕️" },
  { id: 3, value: "애견호텔", emoji: "🏨" },
];

const theme = {
  colors: {
    primary: "#38393E",
    warning: "salmon",
    white: "white",
  },
};

const Kakao = () => {
  const [search, setSearch] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null); // 선택된 마커 상태 추가
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });
  const [apiLoaded, setApiLoaded] = useState(false);

  const searchPlaces = (keyword) => {
    if (!state.center || !apiLoaded) return;

    const ps = new kakao.maps.services.Places();
    const options = {
      location: new kakao.maps.LatLng(state.center.lat, state.center.lng),
      radius: 5000,
      sort: kakao.maps.services.SortBy.DISTANCE,
    };
    ps.keywordSearch(
      keyword,
      (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          setSearch(data);
        } else {
          console.error("검색에 실패하였습니다.");
        }
      },
      options
    );
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할 수 없어요..",
        isLoading: false,
      }));
    }
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=3120addd5694a38a53f6424b4faffba8";
    script.async = true;
    script.onload = () => {
      kakao.maps.load(() => {
        setApiLoaded(true);
        console.log("Kakao Maps API loaded:", !!kakao.maps.services); // API 로드가 완료되면 apiLoaded 상태를 true로 변경
      });
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (selectedMarker) {
      setIsSidebarOpen(true);
    }
  }, [selectedMarker]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Map
          center={state.center}
          style={{
            width: "100%",
            height: "calc(100vh - 109px)",
            marginTop: "48px",
          }}
          level={3}
        >
          {search.map((data) => (
            <MapMarker
              key={data.id}
              position={{ lat: data.y, lng: data.x }}
              image={{
                src: "https://cdn-icons-png.flaticon.com/128/2098/2098567.png",
                size: {
                  width: 35,
                  height: 35,
                },
              }}
              onClick={() => setSelectedMarker(data)} // 마커 클릭 이벤트 추가
            />
          ))}
          <MapMarker
            position={state.center}
            image={{
              src: "https://cdn-icons-png.flaticon.com/128/7124/7124723.png",
              size: {
                width: 50,
                height: 50,
              },
            }}
          />
        </Map>
        {selectedMarker && (
          <div
            style={{
              position: "absolute",
              bottom: "1px",
              right: "10px",
              zIndex: 100,
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "40%",
            }}
          >
            <h2>{selectedMarker.place_name}</h2>
            <p>{selectedMarker.address_name}</p>
            {/* 필요한 경우에는 다른 데이터도 표시할 수 있습니다. */}
          </div>
        )}
        <SearchBtns>
          {KEYWORD_LIST.map((keywordObj) => (
            <button
              key={keywordObj.id}
              type="button"
              onClick={() => searchPlaces(keywordObj.value)}
            >
              {keywordObj.value + keywordObj.emoji}
            </button>
          ))}
        </SearchBtns>
        <button
          onClick={handleSidebarToggle}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            position: "fixed",
            top: "50%",
            left: isSidebarOpen ? "260px" : "10px",
            transition: "0.7s",
            zIndex: 20,
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            transform: isSidebarOpen ? "rotate(240deg)" : "rotate(0deg)",
          }}
        >
          {isSidebarOpen ? "◀" : "▶"}
        </button>
        <div
          style={{
            position: "fixed",
            top: "10px",
            left: "10px",
            zIndex: "10",
            backgroundColor: "white",
            padding: "10px",
            maxHeight: "calc(130vh - 210px)",
            overflowY: "auto",
            width: isSidebarOpen ? "250px" : "0",
            transition: "0.5s",
          }}
        >
          {isSidebarOpen && (
            <>
              <h2>Pet_Map</h2>
              {search.map((data, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  {data.place_image && (
                    <img
                      src={data.place_image}
                      alt={data.place_name}
                      style={{
                        width: "100px",
                        height: "100px",
                        marginRight: "10px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 1)",
                      }}
                    />
                  )}
                  <div>
                    <h3>{data.place_name}</h3>
                    <p>{data.address_name}</p>
                    <p>{data.phone}</p>
                    {data.place_url && (
                      <p>
                        <a href={data.place_url}>상세 정보 보기</a>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: "10",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            padding: "10px",
          }}
        >
          {/* 지도 부분 */}
        </div>
      </ThemeProvider>
    </>
  );
};
export default Kakao;

const SearchBtns = styled.div`
  position: absolute;
  top: 55px;
  right: 20px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    width: 110px;
    padding: 15px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    font-size: 1em;
    color: ${({ theme }) => theme.colors.white};
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.warning};
  }
`;
