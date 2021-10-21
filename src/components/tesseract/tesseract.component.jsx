import React,{useState, useEffect} from 'react'
import {createWorker} from 'tesseract.js'
import testImg from '../../assets/test.jpg'
import Spinner from '../spinner/spinner.component'
import {translate} from '../translator/translator'
import './tesseract.styles.css'



const Tesseract = () => {

    const [text, setText] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const worker = createWorker({
        logger: m => console.log(m),
      });

    const recognize = async () => {
        setText([])
        setIsLoading(true)
        await worker.load();
        await worker.loadLanguage('rus');
        await worker.initialize('rus');
        const { data: { text } } = await worker.recognize(testImg);
        setIsLoading(false)
        setText(text.split(' '))
        // console.log('This is text => ', text)
        
    }

    useEffect(() => {
        translate()
    },[])

    

    return (
        <div className='container'>

        <button onClick={recognize}> Recognize </button>

    {
        isLoading ? 
        <Spinner /> : null
    }

           {
               text? 
               text.map(item => {
                    return <span>{item}</span>
                 }): null

           }

        </div>
    )
}





export default Tesseract




// let str = `Выводы: направления работ по созданию описей
// 3 28
// прослушиванию и описанию фонодокументов выполняют
// перевыполнением и не вызывают беспокойства
// Подготовка описей в цифровом формате к введению в БД
// необходимых для выполнения Плана показателей (недостача прим
// УР 1
// Т
// Работа по непосредственному введению описей в БД проходит с отел
// для компенсации которого в 3-4 кварталах ей будет вь делено больн
// количество рабочих дней, ‹Т НОЙ
// ОА
// в
// :
// С :!;
// ‘СОорЕНО
// ° аЧЫ
// Ар
// › ОНЕ ИОа И
// ок ОАНЕ ОНЕ`
