import React, { useState } from 'react';
import { SwitchTransition, CSSTransition } from "react-transition-group";

export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [currentZoomLevel, setCurrentZoomLevel] = useState(0);
	const [zoomButtonDis, setZoomButtonDis] = useState(false);
	const zoomStr =['pct:40,40,20,20/1500,/0/default.jpg','pct:30,30,40,40/1500,/0/default.jpg','pct:20,20,60,60/1500,/0/default.jpg','pct:10,10,80,80/1500,/0/default.jpg']
	const questions = [
		{
			imgUrl:'https://maps.yale-nus.edu.sg/iiif/2/beinecke__15825824.tif/',
			questionText: 'What is the title of this map?',
			answerOptions:[
				{answerTitle: 'A dangerous shoal seen Septr. the 28, 1767 (Joseph Freewills Islands)',answerDesc:'These three maps are marked with shoals, rocks, water depth, safe entry points, and anchorage locations, to help ships safely anchor. The sites include the Joseph Freewill Islands (Mapia Atoll, Indonesia) and the coast of Mindanao in the Philippines.', isCorrect: true},
				{answerTitle: 'A sketch of the rivers of Siam from the observations of the American missionaries',answerDesc:'A sketch of the river networks discharging into the Gulf of Siam (Gulf of Thailand), derived from the observations of mid-19th century American missionaries. Settlements along the rivers are noted, as are areas where sugarcane was grown.', isCorrect: false},
				{answerTitle: 'A mapp of the islands before Batavia',answerDesc:"This early 19th century map is from a book titled ‘Mr. John Nieuhoff's Voyages’ in which the author reports on his travels to Southeast Asia, including a detailed description of the important port city of Batavia, as shown on the map.", isCorrect: false},
				{answerTitle: 'Archipel des Indes Orientales: qui comprend les Isles de la Sonde, Moluques et Philippines',answerDesc:'This 18th century map of Southeast Asia by the French cartographer Gilles Robert de Vaugondy features the national borders of the Philippines in green, and of modern Indonesia in yellow. The Malay Peninsula and modern Cambodia and Vietnam are in red.', isCorrect: false}
			]
		},
		{
			imgUrl:'https://eservice.nlb.gov.sg/istream2/api/iiif/void/8b4dcb8c-2cf5-46a1-9521-71868e5dda04/',
			questionText: 'What is the title of this map?',
			answerOptions:[
				{answerTitle: 'A dangerous shoal seen Septr. the 28, 1767 (Joseph Freewills Islands)',answerDesc:'These three maps are marked with shoals, rocks, water depth, safe entry points, and anchorage locations, to help ships safely anchor. The sites include the Joseph Freewill Islands (Mapia Atoll, Indonesia) and the coast of Mindanao in the Philippines.', isCorrect: false},
				{answerTitle: 'A sketch of the rivers of Siam from the observations of the American missionaries',answerDesc:'A sketch of the river networks discharging into the Gulf of Siam (Gulf of Thailand), derived from the observations of mid-19th century American missionaries. Settlements along the rivers are noted, as are areas where sugarcane was grown.', isCorrect: false},
				{answerTitle: 'A mapp of the islands before Batavia',answerDesc:"This early 19th century map is from a book titled ‘Mr. John Nieuhoff's Voyages’ in which the author reports on his travels to Southeast Asia, including a detailed description of the important port city of Batavia, as shown on the map.", isCorrect: false},
				{answerTitle: 'Archipel des Indes Orientales: qui comprend les Isles de la Sonde, Moluques et Philippines',answerDesc:'This 18th century map of Southeast Asia by the French cartographer Gilles Robert de Vaugondy features the national borders of the Philippines in green, and of modern Indonesia in yellow. The Malay Peninsula and modern Cambodia and Vietnam are in red.', isCorrect: true}
			]
		},
		{
			imgUrl:'https://maps.yale-nus.edu.sg/iiif/2/beinecke__15514644.tif/',
			questionText: 'What is the title of this map?',
			answerOptions:[
				{answerTitle: 'A dangerous shoal seen Septr. the 28, 1767 (Joseph Freewills Islands)',answerDesc:'These three maps are marked with shoals, rocks, water depth, safe entry points, and anchorage locations, to help ships safely anchor. The sites include the Joseph Freewill Islands (Mapia Atoll, Indonesia) and the coast of Mindanao in the Philippines.', isCorrect: false},
				{answerTitle: 'A sketch of the rivers of Siam from the observations of the American missionaries',answerDesc:'A sketch of the river networks discharging into the Gulf of Siam (Gulf of Thailand), derived from the observations of mid-19th century American missionaries. Settlements along the rivers are noted, as are areas where sugarcane was grown.', isCorrect: true},
				{answerTitle: 'A mapp of the islands before Batavia',answerDesc:"This early 19th century map is from a book titled ‘Mr. John Nieuhoff's Voyages’ in which the author reports on his travels to Southeast Asia, including a detailed description of the important port city of Batavia, as shown on the map.", isCorrect: false},
				{answerTitle: 'Archipel des Indes Orientales: qui comprend les Isles de la Sonde, Moluques et Philippines',answerDesc:'This 18th century map of Southeast Asia by the French cartographer Gilles Robert de Vaugondy features the national borders of the Philippines in green, and of modern Indonesia in yellow. The Malay Peninsula and modern Cambodia and Vietnam are in red.', isCorrect: false}
			]
		},
		{
			imgUrl:'https://eservice.nlb.gov.sg/istream2/api/iiif/void/a537ecfb-3b00-443e-a829-d618f9d0d75f/',
			questionText: 'What is the title of this map?',
			answerOptions:[
				{answerTitle: 'A dangerous shoal seen Septr. the 28, 1767 (Joseph Freewills Islands)',answerDesc:'These three maps are marked with shoals, rocks, water depth, safe entry points, and anchorage locations, to help ships safely anchor. The sites include the Joseph Freewill Islands (Mapia Atoll, Indonesia) and the coast of Mindanao in the Philippines.', isCorrect: false},
				{answerTitle: 'A sketch of the rivers of Siam from the observations of the American missionaries',answerDesc:'A sketch of the river networks discharging into the Gulf of Siam (Gulf of Thailand), derived from the observations of mid-19th century American missionaries. Settlements along the rivers are noted, as are areas where sugarcane was grown.', isCorrect: false},
				{answerTitle: 'A mapp of the islands before Batavia',answerDesc:"This early 19th century map is from a book titled ‘Mr. John Nieuhoff's Voyages’ in which the author reports on his travels to Southeast Asia, including a detailed description of the important port city of Batavia, as shown on the map.", isCorrect: true},
				{answerTitle: 'Archipel des Indes Orientales: qui comprend les Isles de la Sonde, Moluques et Philippines',answerDesc:'This 18th century map of Southeast Asia by the French cartographer Gilles Robert de Vaugondy features the national borders of the Philippines in green, and of modern Indonesia in yellow. The Malay Peninsula and modern Cambodia and Vietnam are in red.', isCorrect: false}
			]
		}
	]
	const handleAnswerButtonClick = (isCorrect) => {
		if(isCorrect){
			setScore(score +1);
		}
		const nextQuestion = currentQuestion + 1;
		if(nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
			setCurrentZoomLevel(0);
		}else {
			setShowScore(true);
		}
		
	};

	const handleZoomButtonClick = () => {
		const nextZoomLevel = currentZoomLevel + 1;
		
		if (nextZoomLevel < 4){
			setCurrentZoomLevel(nextZoomLevel);
		} else{
			setZoomButtonDis(true);
		}
	}
	return (
		<div className='app'>
			{}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion +1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
						<div className=''>
						<SwitchTransition >
          <CSSTransition

            
            classNames="question-img"
          ><img className='question-img' src={questions[currentQuestion].imgUrl + zoomStr[currentZoomLevel]} alt=''/>
		            </CSSTransition>
        </SwitchTransition></div>
						<div><button onClick={()=> handleZoomButtonClick()} disable={zoomButtonDis} >Zoom out</button></div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption, index) => (
							<><button onClick={()=> handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerTitle}</button><p>{answerOption.answerDesc}</p></>
							
						))}
						
						
					</div>
				</>
			)}
		</div>
	);
}
