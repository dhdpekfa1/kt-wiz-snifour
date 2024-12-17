type UrlStructure = {
  name: string;
  sub?: { [key: string]: UrlStructure };
};

export const PAGE_URLS: { [key: string]: UrlStructure } = {
  ktwiz: {
    name: 'KT Wiz',
    sub: {
      about: {
        name: '구단 소개',
      },
      history: {
        name: '구단 연혁',
      },
      bi: {
        name: '구단 BI',
        sub: {
          symbol: {
            name: '심볼마크',
          },
          wordmark: {
            name: '워드마크',
          },
          emblem: {
            name: '엠블럼',
          },
          mascot: {
            name: '마스코트',
          },
          uniform: {
            name: '유니폼',
          },
        },
      },
      policy: {
        name: '회원정책',
        sub: {
          regular: {
            name: '일반회원',
          },
          donation: {
            name: '기부 프로그램',
          },
        },
      },
      sponsor: {
        name: '스폰서',
      },
      wallpaper: {
        name: '월페이퍼',
      },
    },
  },
  wizpark: {
    name: 'Wiz Park',
    sub: {
      intro: {
        name: '구장 소개',
      },
      guide: {
        name: '구장 안내도',
      },
      parking: {
        name: '주차 예약',
      },
      location: {
        name: '찾아오기',
      },
      iksan: {
        name: '익산 야구장',
      },
    },
  },
  game: {
    name: 'Game',
    sub: {
      regular: {
        name: '정규 리그',
        sub: {
          schedule: {
            name: '경기 일정',
          },
          boxscore: {
            name: '박스 스코어',
          },
          ranking: {
            name: '순위 기록',
            sub: {
              team: {
                name: '팀 순위',
              },
              pitcher: {
                name: '투수 순위',
              },
              batter: {
                name: '타자 순위',
              },
              crowd: {
                name: '관중 현황',
              },
            },
          },
          watchPoint: {
            name: '관전 포인트',
          },
        },
      },
      futures: {
        name: '퓨처스 리그',
        sub: {
          schedule: {
            name: '경기 일정',
          },
          boxscore: {
            name: '박스 스코어',
          },
          ranking: {
            name: '순위 기록',
            sub: {
              team: {
                name: '팀순위',
              },
              pitcher: {
                name: '투수순위',
              },
              batter: {
                name: '타자순위',
              },
            },
          },
        },
      },
    },
  },
  player: {
    name: 'Player',
    sub: {
      coach: {
        name: '코칭스텝',
      },
      pitcher: {
        name: '투수',
      },
      position: {
        name: '타자',
        sub: {
          catcher: {
            name: '포수',
          },
          infielder: {
            name: '내야수',
          },
          outfielder: {
            name: '외야수',
          },
        },
      },
      cheer: {
        name: '응원단',
      },
      song: {
        name: '응원가',
      },
      songCopyright: {
        name: '응원가 저작권',
      },
    },
  },
  media: {
    name: 'Media',
    sub: {
      wiznews: {
        name: 'wiz 뉴스',
        sub: {
          wiznews: {
            name: 'wiz 소식',
          },
          wizpress: {
            name: 'wiz 보도자료',
          },
        },
      },
      wizstory: {
        name: 'wiz 스토리',
      },
      firstpitch: {
        name: '시구자 정보',
        sub: {
          detailed: {
            name: '상세 보기',
          },
        },
      },
      photos: {
        name: 'wiz 포토',
        sub: {
          game: {
            name: '경기',
          },
          training: {
            name: '훈련',
          },
          event: {
            name: '행사',
          },
        },
      },
      highlight: {
        name: '하이라이트',
      },
      live: {
        name: 'Live 영상 모음',
        sub: {
          pts: {
            name: '피칭 분석',
          },
          fts: {
            name: '모션트래킹',
          },
        },
      },
    },
  },
  shop: {
    name: 'Shop',
  },
  ticket: {
    name: '티켓구매',
    sub: {
      reservation: {
        name: '티켓 예매',
      },
      group: {
        name: '단체 관람',
      },
      seatmap: {
        name: '입장 및 좌석 정보',
      },
    },
  },
  login: {
    name: '로그인',
    sub: {
      findid: {
        name: '아이디 찾기',
      },
      findpw: {
        name: '비밀번호 찾기',
      },
    },
  },
  join: {
    name: '회원가입',
    sub: {
      step: {
        name: '회원가입 단계',
      },
    },
  },
};
