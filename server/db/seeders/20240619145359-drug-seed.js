'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Drugs', [
      {
        name: 'Аспирин',
        price: 420,
        description: 'Аспирин обладает обезболивающим, жаропонижающим и противовоспалительным действием. Симптоматическое лечение:Повышенная температура тела при простудных и других инфекционно-воспалительных заболеваниях.',
        image: '../../public/img/aspirin.jpg',
        quantity: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Компливит',
        price: 550,
        description: 'Комбинированный поливитаминный препарат, содержащий минералы, магний и селен, а также экстракты лекарственных растений пустырника.  Витаминный комплекс восполняет дефицит витаминов с учетом суточной потребности .',
        image: '../../public/img/komplivit.jpg',
        quantity: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Парацетамол',
        price: 150,
        description: 'Жаропонижающее средство при острых респираторных заболеваниях и других инфекционновоспалительных заболеваниях, сопровождающихся повышением температуры тела.Обезболивающее средство при болевом синдроме слабой и умеренной выраженности.',
        image: '../../public/img/paracetamol.jpg',
        quantity: 70,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Пантенол',
        price: 740,
        description: 'Стимулирует регенерацию кожи, слизистых оболочек, нормализует клеточный метаболизм, ускоряет митоз и увеличивает прочность коллагеновых волокон. Оказывает регенерирующее, метаболическое и слабое противовоспалительное действие.',
        image: '../../public/img/pantenol.jpg',
        quantity: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Регидрон',
        price: 850,
        description: 'Регидрон восстанавливает водно-электролитный и кислотно-щелочной баланс. лечение и профилактика тепловых поражений, связанных с нарушением водно-электролитного обменаю.',
        image: '../../public/img/regidron.jpg',
        quantity: 70,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Мирамистин',
        price: 530,
        description: 'Обладает широким спектром антимикробного действия, включая госпитальные штаммы, резистентные к антибиотикам.',
        image: '../../public/img/miramistin.jpg',
        quantity: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Лизобакт',
        price: 455,
        description: 'Местный антисептик для лечения боли в горле, содержит защитный фермент лизоцим и витамин В6. Обладает направленным противовирусным и антибактериальным действием.',
        image: '../../public/img/lizobakt.jpg',
        quantity: 90,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Тандум Верде',
        price: 490,
        description: 'Оказывает противовоспалительное и местное обезболивающее действие, обладает антисептическим действием против широкого спектра микроорганизмов.Симптоматическая терапия болевого синдрома воспалительных заболеваний.',
        image: '../../public/img/tandumverda.jpeg',
        quantity: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Гриппферон',
        price: 315,
        description: 'Профилактика и лечение гриппа и ОРВИ у детей от рождения и взрослых, включая беременных женщин.Препарат обладает иммуномодулирующим, противовоспалительным и противовирусным действием.',
        image: '../../public/img/grippferon.jpg',
        quantity: 110,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Граммидин',
        price: 599,
        description: 'Граммидин с анестетиком нео - комбинированный препарат для лечения инфекционно-воспалительных заболеваний горла и полости рта.В состав препарата входит противомикробное средство грамицидин С, местноанестезирующее (обезболивающее) средство – оксибупрокаин и антисептическое средство - цетилпиридиния хлорид.',
        image: '../../public/img/grammidin.jpg',
        quantity: 45,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
