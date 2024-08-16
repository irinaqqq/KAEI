function Branch() {
  const data = [
    {
      category: '26.1. Производство электронных элементов',
      import2022: '124,437.2',
      export2022: '8,165.47163',
      importEAEU: '143,579.9',
    },
    {
      category: '26.2. Производство компьютеров и периферийного оборудования',
      import2022: '1,375,923.3',
      export2022: '76,765.1',
      importEAEU: '1,412,829.6',
    },
    {
      category: '26.3. Производство коммуникационного оборудования',
      import2022: '1,502,410.7',
      export2022: '488,921.3',
      importEAEU: '1,550,756.4',
    },
    {
      category: '26.4. Производство приборов бытовой электроники',
      import2022: '403,876.9',
      export2022: '60,472.08261',
      importEAEU: '591,069.7',
    },
    {
      category: '26.5. Производство инструментов и приборов для измерения, тестирования и навигации',
      import2022: '458,319.8',
      export2022: '24,549.6',
      importEAEU: '599,866.1',
    },
    {
      category: '26.6. Производство облучающего, электромедицинского и электротерапевтического оборудования',
      import2022: '252,193.4',
      export2022: '1,378.8',
      importEAEU: '261,798.1',
    },
    {
      category: '26.7. Производство оптических приборов и фотографического оборудования',
      import2022: '36,990.5',
      export2022: '829.58156',
      importEAEU: '38,549.1',
    },
    {
      category: '26.8. Производство магнитных и оптических средств передачи информации',
      import2022: '1,629.7',
      export2022: '1.40238',
      importEAEU: '2,043.2',
    },
    {
      category: 'Итого',
      import2022: '4,155,781.5',
      export2022: '661,083.3',
      importEAEU: '4,600,492.1',
    },
    {
      category: 'Курс 2022',
      import2022: '1,913,654,265.1',
      export2022: '304,415,655.6',
      importEAEU: '2,118,434,602.2',
    },
  ];
    return (
        <>
      <section id="skills" className="skills skills3 section">
      <div className="container section-title" 
      data-aos="fade-up"
      >
        <h2>Данные экспорта и импорта</h2>
      </div>
      <div className="container" data-aos="fade-up">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th className="py-2">Категория</th>
                <th className="py-2">Импорт (тыс. дол. США)</th>
                <th className="py-2">Экспорт (тыс. дол. США)</th>
                <th className="py-2">Импорт (тыс. дол. США) в страны ЕАЭС</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="py-2">
                  <td className="py-2">{row.category}</td>
                  <td className="py-2">{row.import2022}</td>
                  <td className="py-2">{row.export2022}</td>
                  <td className="py-2">{row.importEAEU}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </section>
        </>
      );
  }
  
  export default Branch;