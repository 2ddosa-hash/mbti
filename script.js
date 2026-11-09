'use strict';

const questions = [
  ['사람들과 어울리고 나면 혼자 있을 때보다 에너지가 생기는 편이다.', 'E'],
  ['새로운 일을 배울 때 구체적인 예시부터 보는 게 편하다.', 'S'],
  ['의견이 갈릴 때 사람들의 기분보다 판단 기준의 일관성을 먼저 따진다.', 'T'],
  ['일정이 있는 날에는 미리 순서와 시간을 정해두면 마음이 편하다.', 'J'],
  ['생각을 정리할 때 혼자 곱씹기보다 누군가와 이야기하는 편이다.', 'E'],
  ['아이디어를 판단할 때 실제로 해본 경험을 중요하게 여긴다.', 'S'],
  ['고민 상담을 받으면 마음을 달래는 말보다 해결 방법부터 떠오른다.', 'T'],
  ['해야 할 일을 일찍 끝내두고 쉬는 편을 선호한다.', 'J'],
  ['처음 보는 사람이 많은 자리에서는 먼저 말을 걸기보다 분위기를 살핀다.', 'I'],
  ['이야기를 들으면 눈앞의 사실에서 여러 가능성으로 생각이 뻗어나간다.', 'N'],
  ['결정을 내릴 때 그 결정이 사람들에게 어떤 영향을 줄지 먼저 생각한다.', 'F'],
  ['여행에서는 세부 일정을 정하기보다 현장에서 선택하는 게 좋다.', 'P'],
  ['즐거운 모임이 끝난 뒤에도 혼자 쉬는 시간이 필요하다.', 'I'],
  ['정해진 방법을 익히는 것보다 새로운 방법을 떠올리는 일이 더 재미있다.', 'N'],
  ['피드백을 전할 때 내용만큼 상대가 어떻게 받아들일지도 중요하다.', 'F'],
  ['계획을 확정하기보다 상황에 따라 바꿀 여지를 남겨두는 게 편하다.', 'P']
];
const results = {
  INTJ: ['🪐', '미래 설계하는 우주 건축가', '멀리 내다보고 나만의 길을 설계하는 편이에요. 조용한 집중력과 독립적인 생각으로 복잡한 문제의 실마리를 찾아요.', '완벽한 설계가 끝나기 전에 작은 시제품 하나를 만들어 보세요.'],
  INTP: ['🔭', '머릿속 탭 27개 탐험가', '하나의 궁금증에서 새로운 세계를 발견해요. 혼자 생각을 펼치고 익숙한 답에도 질문을 던지는 시간이 즐거워요.', '오늘 가장 궁금한 것 하나를 골라 짧게 기록해 보세요.'],
  ENTJ: ['🚀', '일단 출발하는 로켓 대장', '목표가 생기면 방향을 잡고 사람들을 움직이는 편이에요. 막막한 상황에서도 다음 행동을 찾아내는 힘이 있어요.', '다음 계획을 정하기 전에 함께하는 사람의 생각도 들어 보세요.'],
  ENTP: ['💡', '상식에 물음표 붙이는 발명가', '익숙한 방식에도 다른 가능성을 발견해요. 대화 속에서 생각을 발전시키며 새로운 시도를 즐기는 편이에요.', '떠오른 아이디어 중 하나만 골라 끝까지 작게 완성해 보세요.'],
  INFJ: ['🌙', '마음을 읽는 달빛 안내자', '말 너머의 의미와 사람의 마음을 깊이 살피는 편이에요. 소중한 가치에 맞춰 의미 있는 방향을 찾아가요.', '다른 사람의 마음을 살핀 만큼 내 마음에도 휴식을 주세요.'],
  INFP: ['🦄', '마음속 동화 쓰는 몽상가', '나만의 가치와 상상력을 소중히 여겨요. 작고 평범한 순간에서도 특별한 의미를 발견하는 편이에요.', '머릿속에 간직한 생각을 한 문장이나 작은 그림으로 꺼내 보세요.'],
  ENFJ: ['☀️', '가능성을 비추는 햇살 응원단', '사람들의 장점을 발견하고 함께 성장할 방법을 찾아요. 따뜻한 표현과 추진력으로 주변에 용기를 건네는 편이에요.', '오늘은 나에게도 다른 사람에게 하듯 다정한 말을 건네 보세요.'],
  ENFP: ['🎈', '호기심 따라 날아가는 풍선', '새로운 사람과 가능성을 만나면 마음이 움직여요. 자유로운 상상과 따뜻한 관심으로 일상에 색을 더하는 편이에요.', '하고 싶은 일 하나를 오늘 가능한 첫 단계로 바꿔 보세요.'],
  ISTJ: ['📚', '차곡차곡 쌓는 신뢰 수집가', '작은 약속과 구체적인 사실을 중요하게 여겨요. 꾸준함과 꼼꼼함으로 일상을 안정적으로 만들어 가는 편이에요.', '오늘 일정에 계획하지 않은 작은 즐거움을 하나 넣어 보세요.'],
  ISFJ: ['🧸', '다정함 챙기는 포근한 수호자', '주변 사람에게 필요한 것을 세심하게 발견해요. 말보다 꾸준한 행동으로 소중한 관계를 지켜가는 편이에요.', '부탁을 받았을 때 내 여유부터 확인해도 괜찮아요.'],
  ESTJ: ['🧭', '착착 굴러가는 일상 지휘자', '해야 할 일을 정리하고 현실적인 방법으로 실행해요. 명확한 기준과 책임감으로 함께하는 일에 안정감을 더해요.', '효율과 함께 각자에게 편한 방식도 한 번 살펴보세요.'],
  ESFJ: ['🌷', '우리 사이 온도 지킴이', '함께하는 사람들의 편안함을 잘 살피는 편이에요. 작은 관심과 실질적인 도움으로 관계를 따뜻하게 이어가요.', '모두의 취향을 챙기기 전에 오늘 내가 원하는 것도 골라 보세요.'],
  ISTP: ['🛠️', '조용히 해결하는 만능 맥가이버', '직접 살펴보고 경험하며 문제를 풀어가는 편이에요. 필요한 순간에 차분하게 움직이고 나만의 자유를 소중히 여겨요.', '혼자 해결한 과정을 누군가에게 짧게 나눠 보세요.'],
  ISFP: ['🎨', '일상에 색을 입히는 감각 예술가', '지금 이 순간의 느낌과 나만의 취향을 소중히 여겨요. 조용한 배려와 섬세한 감각으로 나다운 일상을 만들어 가요.', '마음에 든 풍경이나 소리를 하나 남겨 보세요.'],
  ESTP: ['🏄', '기회 위를 달리는 파도 라이더', '눈앞의 상황을 빠르게 읽고 직접 부딪쳐보는 편이에요. 생생한 경험 속에서 해결 방법과 재미를 발견해요.', '다음 행동 전에 이후에 생길 일도 잠깐 떠올려 보세요.'],
  ESFP: ['🪩', '오늘을 반짝이는 순간 수집가', '사람들과 경험을 나누고 지금의 즐거움을 발견해요. 자연스러운 표현과 생동감으로 주변 분위기를 환하게 만드는 편이에요.', '즐거웠던 순간 하나와 그 이유를 짧게 기록해 보세요.']
};
const axes = [['E', 'I', '외향', '내향'], ['S', 'N', '감각', '직관'], ['T', 'F', '사고', '감정'], ['J', 'P', '판단', '인식']];
const labels = ['전혀 그렇지 않다', '그렇지 않은 편이다', '반반이다', '그런 편이다', '매우 그렇다'];
const $ = id => document.getElementById(id);
let answers = Array(16).fill(null);
let current = 0;
let latestResult;
function showScreen(name) {
  ['start', 'quiz', 'result'].forEach(screen => { $(`${screen}-screen`).hidden = screen !== name; });
  window.scrollTo({ top: 0, behavior: 'instant' });
}
function renderQuestion() {
  $('progress-label').textContent = `${current + 1} / 16`;
  $('progress').setAttribute('aria-valuenow', current);
  $('progress-fill').style.width = `${current / 16 * 100}%`;
  $('question-number').textContent = `QUESTION ${String(current + 1).padStart(2, '0')}`;
  $('question-title').textContent = questions[current][0];
  $('answers').replaceChildren();
  labels.forEach((label, index) => {
    const button = document.createElement('button');
    button.className = `answer${answers[current] === index - 2 ? ' selected' : ''}`;
    button.setAttribute('aria-pressed', String(answers[current] === index - 2));
    const dot = document.createElement('span');
    dot.className = 'answer-dot';
    dot.setAttribute('aria-hidden', 'true');
    button.append(dot, document.createTextNode(label));
    button.addEventListener('click', () => {
      answers[current] = index - 2;
      if (current === 15) finish();
      else { current++; renderQuestion(); }
    });
    $('answers').append(button);
  });
  $('previous-button').disabled = current === 0;
  $('question-title').focus();
}
function calculate(values) {
  const scores = axes.map(([first, second]) => questions.reduce((sum, question, index) => {
    if (question[1] === first) return sum + values[index];
    if (question[1] === second) return sum - values[index];
    return sum;
  }, 0));
  // An exact tie uses the latest non-neutral answer on that axis as a consistent tie-break.
  const type = scores.map((score, axis) => {
    if (score !== 0) return axes[axis][score > 0 ? 0 : 1];
    for (let i = questions.length - 1; i >= 0; i--) {
      const side = axes[axis].indexOf(questions[i][1]);
      if (side < 0 || side > 1 || values[i] === 0) continue;
      return axes[axis][values[i] > 0 ? side : 1 - side];
    }
    return axes[axis][0];
  }).join('');
  return { type, scores };
}
function finish() {
  latestResult = calculate(answers);
  const { type, scores } = latestResult;
  const [emoji, title, description, tip] = results[type];
  $('result-emoji').textContent = emoji;
  $('result-type').textContent = type;
  $('result-title').textContent = title;
  $('result-description').replaceChildren();
  (description.match(/[^.!?]+[.!?]?/g) || [description]).forEach(sentence => {
    const line = document.createElement('span');
    line.textContent = sentence.trim();
    $('result-description').append(line);
  });
  $('result-tip').textContent = tip;
  $('share-status').textContent = '';
  $('spectrums').replaceChildren();
  scores.forEach((score, index) => {
    const [first, second, firstName, secondName] = axes[index];
    const percentage = Math.round((score + 8) / 16 * 100);
    const row = document.createElement('div');
    row.className = 'spectrum';
    row.innerHTML = `<div class="spectrum-label"><span>${first} ${firstName} ${percentage}%</span><span>${100 - percentage}% ${secondName} ${second}</span></div><div class="spectrum-track"><span style="width:${percentage}%"></span></div>`;
    if (Math.abs(score) <= 2) {
      const note = document.createElement('div');
      note.className = 'balanced';
      note.textContent = score === 0 ? '두 성향이 균형을 이뤄요. 유형 글자는 참고용으로 표시했어요.' : '두 성향이 비슷해 상황에 따라 달라질 수 있어요.';
      row.append(note);
    }
    $('spectrums').append(row);
  });
  showScreen('result');
  $('result-title').focus();
}
$('start-button').addEventListener('click', () => { showScreen('quiz'); renderQuestion(); });
$('previous-button').addEventListener('click', () => { if (current > 0) { current--; renderQuestion(); } });
$('restart-button').addEventListener('click', () => {
  answers = Array(16).fill(null); current = 0; latestResult = null;
  showScreen('start'); $('start-button').textContent = '나의 별난 모습 찾기 ↗'; $('start-button').focus();
});
$('share-button').addEventListener('click', async () => {
  if (!latestResult) return;
  const { type } = latestResult;
  const text = `오늘도별종 · ${type}\n${results[type][0]} ${results[type][1]}\n${results[type][2]}`;
  const data = { title: '오늘도별종 — 나의 성향 결과', text };
  if (location.protocol === 'https:' || location.protocol === 'http:') data.url = location.href.split('#')[0];
  try {
    if (navigator.share) { await navigator.share(data); $('share-status').textContent = '공유했어요!'; return; }
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text + (data.url ? `\n${data.url}` : ''));
      $('share-status').textContent = '결과를 복사했어요. 원하는 곳에 붙여넣어 주세요.';
      return;
    }
  } catch (error) {
    if (error.name === 'AbortError') { $('share-status').textContent = '공유를 취소했어요.'; return; }
  }
  // Local files and browsers without sharing support can still save the result.
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url; link.download = `오늘도별종-${type}.txt`; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  $('share-status').textContent = '공유용 결과 파일을 저장했어요.';
});

$('home-button').addEventListener('click', () => {
 showScreen('start');
 $('start-button').textContent = answers.some(value => value !== null) ? '이어서 테스트하기 ↗' : '나의 별난 모습 찾기 ↗';
 $('start-button').focus();
});

$('result-home-button').addEventListener('click', () => {
  answers = Array(16).fill(null); current = 0; latestResult = null;
  showScreen('start');
  $('start-button').textContent = '나의 별난 모습 찾기 ↗';
  $('start-button').focus();
});
