(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{322:function(a,t,v){"use strict";v.r(t);var _=v(14),s=Object(_.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"모놀리식-vs-분산형2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#모놀리식-vs-분산형2"}},[a._v("#")]),a._v(" 모놀리식 vs 분산형2")]),a._v(" "),t("h4",{attrs:{id:"오류-4-네트워크는-안전하지-않다"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#오류-4-네트워크는-안전하지-않다"}},[a._v("#")]),a._v(" 오류#4 : 네트워크는 안전하지 않다")]),a._v(" "),t("ul",[t("li",[a._v("보안은 너무 어려운 문제임")]),a._v(" "),t("li",[a._v("분산 배포된 각 엔드포인트에 악의적인 요청이 유입되지 않게 철저한 대책이 필요함")])]),a._v(" "),t("h4",{attrs:{id:"오류-5-토폴로지는-항상-바뀐다"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#오류-5-토폴로지는-항상-바뀐다"}},[a._v("#")]),a._v(" 오류#5 :토폴로지는 항상 바뀐다")]),a._v(" "),t("ul",[t("li",[a._v("네트워크를 구성하는 모든 라우터, 허브, 스위치 등 전체 네트워크 토폴로지가 불변할 거란 가정은 오해로 네트워크 토폴로지는 당연히 변한다")])]),a._v(" "),t("h4",{attrs:{id:"오류-6-관리자는-여러-사람이다"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#오류-6-관리자는-여러-사람이다"}},[a._v("#")]),a._v(" 오류#6 : 관리자는 여러 사람이다")]),a._v(" "),t("ul",[t("li",[a._v("네트워크 관리자는 보통 여러 명이다. 특정 문제에 따라 소통해야하는 사람이 다르다")]),a._v(" "),t("li",[a._v("정상 궤도에 오르려면 상당히 많은 조율 과정이 불가피하다")])]),a._v(" "),t("h4",{attrs:{id:"오류-7-원격-액세스는-돈이-든다"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#오류-7-원격-액세스는-돈이-든다"}},[a._v("#")]),a._v(" 오류# 7: 원격 액세스는 돈이 든다")]),a._v(" "),t("ul",[t("li",[a._v("REST 호출을 하는데는 비용이 발생한다")]),a._v(" "),t("li",[a._v("분산 아키텍처는 많은 리소스가 동원되므로 모놀리식보다 비용이 훨씬 많이 듬")])]),a._v(" "),t("h4",{attrs:{id:"오류-8-네트워크는-균일하지-않다"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#오류-8-네트워크는-균일하지-않다"}},[a._v("#")]),a._v(" 오류# 8 : 네트워크는 균일하지 않다")]),a._v(" "),t("ul",[t("li",[a._v("여러 업체의 네트워크 하드웨어 제품들이 얽혀있다")]),a._v(" "),t("li",[a._v("모든 하드웨어가 서로 다 잘 맞물려 동작하는것이 아니라는 말")]),a._v(" "),t("li",[a._v("실제로 간혹 패킷이 유실되는 사고가 많이 일어남")])]),a._v(" "),t("h3",{attrs:{id:"부록"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#부록"}},[a._v("#")]),a._v(" 부록")]),a._v(" "),t("h4",{attrs:{id:"분산-이키텍처-고려사항"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#분산-이키텍처-고려사항"}},[a._v("#")]),a._v(" 분산 이키텍처 고려사항")]),a._v(" "),t("h5",{attrs:{id:"분산로깅"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#분산로깅"}},[a._v("#")]),a._v(" 분산로깅")]),a._v(" "),t("ul",[t("li",[a._v("시스템 로그가 분산되어 있어 데이터 누락에 원인을 찾기가 어려움")])]),a._v(" "),t("h5",{attrs:{id:"분산-트랜잭션"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#분산-트랜잭션"}},[a._v("#")]),a._v(" 분산 트랜잭션")]),a._v(" "),t("ul",[t("li",[a._v("모놀리식은 CIDI(원자성,일관성,격리성,지속성) 트랜잭션을 걸어 데이터 일관성과 무결성을 강제함")]),a._v(" "),t("li",[a._v("분산 아키텍처는 배포 단위에서처리된 데이터를 어느 시점에 모두 일관된 상태로 동기화함")]),a._v(" "),t("li",[a._v("트랜잭셔널 사가를 사용함")]),a._v(" "),t("li",[a._v("보상을 위해 이벤트를 소싱하거나 트랜잭션 상태를 관리하기 위해 유한 상태기계를 활용")]),a._v(" "),t("li",[a._v("혹은 BASE 트랜잭션을 사용")])]),a._v(" "),t("h5",{attrs:{id:"계약-관리-및-버저닝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#계약-관리-및-버저닝"}},[a._v("#")]),a._v(" 계약 관리 및 버저닝")]),a._v(" "),t("ul",[t("li",[a._v("계약 생성, 유지보수, 버저닝 역시 까다로움")]),a._v(" "),t("li",[a._v("계약은 클라이언트와 서비스 모두 합의한 행위와 데이터")]),a._v(" "),t("li",[a._v("분리된 서비스와 시스템을 제각기 다른 팀과 부서가 소유하기에 유지보수가 어려움")])])])}),[],!1,null,null,null);t.default=s.exports}}]);