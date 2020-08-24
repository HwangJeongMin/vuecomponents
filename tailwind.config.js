module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        // 대표 배경 색상
        'main-color': '#00AEBD',
        // 대표 텍스트 색상
        'main-textColor': '#1E1E1E',
        // 가로 줄 색상
        colline: '#E5E5E5',
        // 세로 줄 색상
        rowline: '#E9ECEE',
        // 합격 텍스트 배경 색상
        passColor: '#BED732',
        // 면제 텍스트 배경 색상
        exemptionColor: '#7FD730',
        // 반려 텍스트 배경 색상
        rejectColor: '#FF3582',
        // 검색 관련 placeholder, 배경 색상 & 의뢰, 접수, 재의뢰 배경 색상
        searchColor: '#B5BCCD',
        // 검색 선택 시 배경 색상
        searchChecked: '#858DA3',
        // 연관검색어 텍스트 색상
        searchText: '#F6F6F6',
        // placeholder 색상
        placeholderColor: '#A2A2A2',
        // 필수 입력 강조 색상
        requiredColor: '#FF2626',
        // 좋아요 텍스트
        likeColor: '#CE0C47',
        // 필터, 태그 선택 시 텍스트 색상 & 인기검색어 텍스트 색상
        'ultramarine-blue': '#171F31',
      },
    },
  },
  variants: {
    borderWhite: ['hover'],
  },
  plugins: [],
};
