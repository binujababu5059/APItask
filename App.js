import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Searchbar} from 'react-native-paper';
const DATA = [
  {
    Ingredient: 'Carrot',
    Shorttext: 'A great starter for your baby',
    'Age group': '6 Month',
    Allergent: 'No',
    Introduction:
      'Carrot is a healthy start for your babies. Carrots are rich in nutrients and vitamins help in promoting baby growth. It can be introduced to babies at an age of 6 months. The vitamins present in carrots helped improve eyesight.',
    Recipe: 'fks74s1dv3o6n',
    Video: 'Carrot',
    'How to serve':
      'Carrot is a nutritionally rich vegetable, making it a perfect first food for kids. It is important to take care of how to serve the food correctly to toddlers. For a 6-month-old baby, carrots can be served as a puree or mashed form. You can serve well-cooked carrot sticks to a 9-month-old kid. Always present near your baby when they are eating.',
    'Choking & Allergies':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/does-carrot-cause-choking-and-allergies/',
    'Health & Nutrition':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/is-carrot-good-for-babies/',
    'Read More':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/when-can-toddlers-have-raw-carrots/',
    'Nutritional Rating': '4',
    imageUrl:
      'https://forking.riafy.in/csv-to-api/baby-led-weaning/images/Carrot.jpg',
  },
  {
    Ingredient: 'Butternut Squash',
    Shorttext: 'The best first food',
    'Age group': '6 Month',
    Allergent: 'No',
    Introduction:
      "Butternut squash can be introduced to babies as puree at an age of 6 months. It is filled with nutrients and vitamins that make it perfect to include in a baby's diet. It is good for digestion and for improving eyesight.",
    Recipe: 'fksrdq057o96g',
    Video: 'Butternut Squash',
    'How to serve':
      'You can offer the babies to munch well-cooked squash wedges or serve them mashed butternut squash. Encourage your munchkins to use their hands to feed themselves. Ensure to remove all seeds from the squash to prevent choking hazards on kids. For a 9 to 12-month-old kid, you can give them well-cooked bite-sized pieces.',
    'Choking & Allergies':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/does-butternut-squash-cause-choking-and-allergies/',
    'Health & Nutrition':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/is-butternut-squash-good-for-the-babys-health/',
    'Read More':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/can-butternut-squash-cause-constipation-in-babies/',
    'Nutritional Rating': '4',
    imageUrl:
      'https://forking.riafy.in/csv-to-api/baby-led-weaning/images/Butternut Squash.jpg',
  },
  {
    Ingredient: 'Sweet Potatoes',
    Shorttext: 'Fully cooked & soft baby food',
    'Age group': '6 Month',
    Allergent: 'No',
    Introduction:
      'Sweet potatoes are highly nutritious making them the perfect choice as a first solid food. You can opt for puree because it is easy to digest. The vitamins in sweet potato boost immunity and the nutrients help in strengthening bones',
    Recipe: 'fks1n5eknq6g823',
    Video: 'Sweet Potatoes',
    'How to serve':
      'Every child is different and so will their eating habits. Sometimes your child can start with solid foods early or late depending on their development. It is necessary to consult your pediatrician and seek assistance if you are new to parenting. You can either serve the baby with cooked sweet potato wedges or as mashed food if your baby is 6 months old. Continue offering cooked potato wedges until your child is well-practiced withholding and grasping the food well at 9 months. When they have finished 1 year, you can start offering them bite-sized pieces of cooked sweet potato as finger foods or on a fork. \r\n',
    'Choking & Allergies':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/does-sweet-potatoes-cause-choking-and-allergies/',
    'Health & Nutrition':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/is-sweet-potato-good-for-the-babys-health/',
    'Read More':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/health-benefits-of-sweet-potatoes/',
    'Nutritional Rating': '5',
    imageUrl:
      'https://forking.riafy.in/csv-to-api/baby-led-weaning/images/Sweet Potatoes.jpg',
  },
  {
    Ingredient: 'Yogurt',
    Shorttext: 'Make baby tummies happy',
    'Age group': '6 Month',
    Allergent: 'Diary',
    Introduction:
      "The nutrients in yogurt help in the baby's growth. Yogurt is rich in nutrients makes it ideal as an early food. The lactic acid in yogurt boosts the immune system.",
    Recipe: 'fkslufhfh0na9c',
    Video: 'Yogurt',
    'How to serve':
      "Yogurt is the easiest food to feed babies without any effort. You don't have to do anything special, just spoon-fed yogurt for the baby. Always choose regular or greek yogurt for your babies. Flavored yogurt has additives, it is not good for babies.\r\n\r\nFor a 6- month old baby, scoop the yogurt and give it directly. Yogurt enriched with fruits can be given to 9 to 12-month-old babies. Offer them yogurt in a bowl and allow them to explore.\r",
    'Choking & Allergies':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/does-yogurt-cause-choking-and-allergies/',
    'Health & Nutrition':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/is-yogurt-good-for-babies/',
    'Read More':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/health-benefits-of-yogurt-for-babies/',
    'Nutritional Rating': '5',
    imageUrl:
      'https://forking.riafy.in/csv-to-api/baby-led-weaning/images/Yogurt.jpg',
  },
  {
    Ingredient: 'Chicken',
    Shorttext: 'A good source of protein',
    'Age group': '6 Month',
    Allergent: 'No',
    Introduction:
      'Chicken is rich in protein. You can feed chicken to your little ones in a form of puree. The proteins in meat aid digestion and boost growth. Chicken can be introduced to babies as puree at an age of 8 months.',
    Recipe: 'fksv629a9srjbb',
    Video: 'Chicken',
    'How to serve':
      'When the baby turns 6 to 9 months old, they will start to pick up and munch food. This will enhance their chewing skills. You can serve them thinly sliced chicken breast or ground meats. \r\n\r\nContinue to offer them finely shredded or sliced chicken until 12 months old. When they have finished 1 year, you can start offering them bite-sized pieces as finger foods. \r\n',
    'Choking & Allergies':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/does-chicken-cause-choking-and-allergies/',
    'Health & Nutrition':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/is-chicken-good-for-the-babys-health/',
    'Read More':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/health-benefits-of-chicken-to-toddlers/',
    'Nutritional Rating': '5',
    imageUrl:
      'https://forking.riafy.in/csv-to-api/baby-led-weaning/images/Chicken.jpg',
  },
  {
    Ingredient: 'Salmon',
    Shorttext: 'A safe & healthy solid food',
    'Age group': '6 Month',
    Allergent: 'No',
    Introduction:
      'Salmon is a good choice for new eaters. You can feed salmon to babies at an age of 6 months. Salmon is a brain-boosting food, because of the omega-3 fat in them.',
    Recipe: 'fks14rv1qpksvrg',
    Video: 'Salmon',
    'How to serve':
      'You can serve pureed salmon as early food to toddlers. Cut salmon into strips for babies to chew and swallow. Your kids will start picking up food at 8 to 12 months old, so try serving salmon cakes, cut into pieces.\r\nA 12 to an 18-month kid can be served a bite-sized salmon fillet.\r\n\r\n\r',
    'Choking & Allergies':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/does-salmon-cause-choking-and-allergies/',
    'Health & Nutrition':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/is-salmon-good-for-babies/',
    'Read More':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/things-to-consider-before-feeding-salmon-to-kids/',
    'Nutritional Rating': '5',
    imageUrl:
      'https://forking.riafy.in/csv-to-api/baby-led-weaning/images/Salmon.jpg',
  },
  {
    Ingredient: 'Melon',
    Shorttext: 'Rich in vitamin A & C',
    'Age group': '6 Month',
    Allergent: 'No',
    Introduction:
      'Melon can be given to babies at an age of 8 months. It is enriched with water, so it helps the babies to stay hydrated. Melon is good for boosting immunity.',
    Recipe: 'fks25nibi1qo9tn',
    Video: 'Melon',
    'How to serve':
      'Melon is a healthy and nutritious fruit for your toddlers. It is sweet and healthy and helps to stay hydrated. Melon can be introduced to babies at an age of 6 months. You can give the 6 to 12-month month babies either melon puree or thin rectangle pieces.\n\n',
    'Choking & Allergies':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/does-melon-cause-choking-and-allergies/',
    'Health & Nutrition':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/is-melon-good-for-babies/',
    'Read More':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/nutritional-benefits-of-cantaloupe/',
    'Nutritional Rating': '2',
    imageUrl:
      'https://forking.riafy.in/csv-to-api/baby-led-weaning/images/Melon.jpg',
  },
  {
    Ingredient: 'Banana',
    Shorttext: 'Loaded with essential nutrients',
    'Age group': '6 Month',
    Allergent: 'No',
    Introduction:
      'Bananas are a great food to give babies as soon as they start weaning. Bananas are loaded with nutrients and fibers that help babies to gain weight and for good bowel movements. You can start feeding babies bananas at the age of 6 months. The smooth and creamy texture of bananas makes them easier for babies to eat.',
    Recipe: 'fks1bmq5aiavlsl',
    Video: 'Banana',
    'How to serve':
      'A baby might take their own sweet pace to develop through different stages of eating. But a parent must know how to serve the food in the right way. A safe eating environment is necessary for the baby who has just begun feeding on solid foods. \r\n\r\nMash the banana properly with a fork before feeding it to a 6-month-old baby. If your baby is 9 months old, you can either give them a banana-shaped spear which is easier to pick up. A one-year-old baby can eat the banana after it is peeled or as bite-size pieces. Giving it to the baby after peeling can help the baby develop a good sense of grip. \r',
    'Choking & Allergies':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/does-banana-cause-choking-and-allergies/',
    'Health & Nutrition':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/are-bananas-healthy-for-babies/',
    'Read More':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/bananas-and-constipation/',
    'Nutritional Rating': '5',
    imageUrl:
      'https://forking.riafy.in/csv-to-api/baby-led-weaning/images/Banana.jpg',
  },
  {
    Ingredient: 'Apple',
    Shorttext: 'A sweet treat your baby',
    'Age group': '6 Month',
    Allergent: 'No',
    Introduction:
      "\u2018An apple a day keeps your doctor away' explains it is the best fruit to introduce to your babies when starting solids. The best way to feed apples to babies is in pureed form. The nutrients and fibers present in apples help the baby grow and stay active all day.",
    Recipe: 'fks1r2gdj3mr71q',
    Video: 'Apple',
    'How to serve':
      'Every child is different and so will their eating habits. Sometimes your child can start with solid foods early or late depending on their development. It is necessary to consult your pediatrician and seek assistance if you are new to parenting. Apples are usually served after boiling if your child hasn\u2019t developed their teeth. Boil apples in water until they are easily by a fork or cook in the oven until soft. You can then mash them before serving them to a 6-month-old baby. \r\n\r\nIf your baby is 9 months old or more, you can start serving them raw apples cut into thin slices with or without the skin. But if you feel that your kid is not ready, stick on to the boiled form. Children above 1 and half years can be served with whole apples without the skin so that they can start eating at their own pace. Always be present near your child when they are feeding.\r\n\r',
    'Choking & Allergies':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/does-apple-cause-choking-and-allergies/',
    'Health & Nutrition':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/are-apples-healthy-for-babies/',
    'Read More':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/is-apple-juice-good-for-babies/',
    'Nutritional Rating': '3',
    imageUrl:
      'https://forking.riafy.in/csv-to-api/baby-led-weaning/images/Apple.jpg',
  },
  {
    Ingredient: 'Strawberries',
    Shorttext: 'Introduce mashed strawberries',
    'Age group': '6 Month',
    Allergent: 'No',
    Introduction:
      'Strawberries are a delicious treat for your baby to start on solids. The vitamins and folates in strawberries help in building immunity and brain development. Take proper care while feeding berries to kids to avoid choking and allergic reactions.',
    Recipe: 'fks2c71lgprq3ie',
    Video: 'Strawberry Puree',
    'How to serve':
      'Every child is different and so will their eating habits. Sometimes your child can start with solid foods early or late depending on their development. It is necessary to consult your pediatrician and seek assistance if you are new to parenting. Strawberries can be served whole or mashed depending on the ripeness. If the strawberry is soft so that it can be squashed when pressed, it can be served right away to a 6-month-old baby after removing the stem. Also, make sure to serve bigger strawberries to avoid swallowing. \r\n\r\nFor a 9-month-old baby, strawberries can be served sliced vertically from the top to the bottom. For a baby older than 1 year, you are welcome to serve bigger portions if you feel comfortable with it. Always be present near your child when they are feeding.\r',
    'Choking & Allergies':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/does-strawberry-cause-choking-and-allergies/',
    'Health & Nutrition':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/are-strawberries-healthy-for-babies/',
    'Read More':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/what-amount-of-strawberries-should-i-feed-my-baby/',
    'Nutritional Rating': '2',
    imageUrl:
      'https://forking.riafy.in/csv-to-api/baby-led-weaning/images/Strawberries.jpg',
  },
  {
    Ingredient: 'Broccoli',
    Shorttext: 'A nutritious green vegetable',
    'Age group': '6 Month',
    Allergent: 'No',
    Introduction:
      'Broccoli can be fed to babies at the age of 8 months or more. The vitamins in broccoli boost eyesight and immunity. This nutrient-rich vegetable supports overall baby health and immune to disease. Properly cooked broccoli is the best food for babies.',
    Recipe: 'fks135v0hrldeie',
    Video: 'Broccoli',
    'How to serve':
      'Every child is different and so will their eating habits. Sometimes your child can start with solid foods early or late depending on their development. It is necessary to consult your pediatrician and seek assistance if you are new to parenting. If your kid is 6 months old it is better that you serve it big after steaming. You can also grate or mash steamed broccoli.\r\n\r\nA 9-month-old baby can be served with bite-sized pieces of steamed broccoli stem or floret. You can adjust the size of the broccoli depending on how your child picks up the food. If the toddler finds it difficult to pick up the pieces, you can always switch to larger florets or stems. As your kid grows older you can reduce the cooking time of the broccoli to develop the tearing and chewing skills. Always be present near your child when they are feeding.\r',
    'Choking & Allergies':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/does-broccoli-cause-choking-and-allergies/',
    'Health & Nutrition':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/are-broccolis-healthy-for-babies/',
    'Read More':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/can-broccoli-help-your-baby-poop/',
    'Nutritional Rating': '3',
    imageUrl:
      'https://forking.riafy.in/csv-to-api/baby-led-weaning/images/Broccoli.jpg',
  },
  {
    Ingredient: 'Egg',
    Shorttext: 'A safe early food for babies',
    'Age group': '6 Month',
    Allergent: 'Egg',
    Introduction:
      "An egg is a superfood that can be given to babies as soon as they start solids. It is good to feed egg yolk first to babies before egg whites. Eggs are great for your infant's growth. The minerals present in eggs boost the immune system.",
    Recipe: 'fkshostfd23mmt',
    Video: 'Egg Treats\r\n',
    'How to serve':
      'Every child is different and so will their eating habits. Sometimes your child can start with solid foods early or late depending on their development. It is necessary to consult your pediatrician and seek assistance if you are new to parenting. For a 6-month-old child, the easiest way to introduce eggs is in the form of an omelet cut into strips the size of two adult fingers.\r\n\r\nWhen your baby has reached 9 months, you can reduce the size to small bite-size pieces. You can serve them as omelets, scrambled eggs, or hard-boiled eggs cut into pieces. You can start serving hard-boiled eggs when your kid has become 1 year old. Just remember to serve with a cup of water or milk to wash down the dry yolk.\r\n\r',
    'Choking & Allergies':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/does-egg-cause-choking-and-allergies/',
    'Health & Nutrition':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/are-eggs-healthy-for-babies/',
    'Read More':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/can-toddlers-eat-eggs-every-day/',
    'Nutritional Rating': '5',
    imageUrl:
      'https://forking.riafy.in/csv-to-api/baby-led-weaning/images/Egg.jpg',
  },
  {
    Ingredient: 'Beans',
    Shorttext: 'Good source of micronutrients',
    'Age group': '6 Month',
    Allergent: 'No',
    Introduction:
      "Beans are rich in vitamins, minerals, fiber, and protein. So it is good to add beans to your kid's diet. You can start giving beans to babies when they turn 6 months old. The fiber content helps in digestion and folate helps in functioning vital organs.",
    Recipe: 'fks15d0o49s250c',
    Video: 'Bean Puree',
    'How to serve':
      'Every child is different and so will their eating habits. Sometimes your child can start with solid foods early or late depending on their development. It is necessary to consult your pediatrician and seek assistance if you are new to parenting. It is important to cook the beans well before serving them to your 6-month-old baby. Serving the beans wouldn\u2019t require any cutting, the beans can be served whole.\r\n\r\nFor a 9-month-old baby, you can serve bite-size pieces of cooked green beans. And you can as well train your baby to use forks while eating the beans. You can continue to give bite-sized pieces to your kid even after 1 year, but you can still reduce the cooking time to help them develop their tearing and chewing skills. \r',
    'Choking & Allergies':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/does-beans-cause-choking-and-allergies/',
    'Health & Nutrition':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/are-beans-healthy-for-babies/',
    'Read More':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/how-to-choose-and-store-your-beans/',
    'Nutritional Rating': '4',
    imageUrl:
      'https://forking.riafy.in/csv-to-api/baby-led-weaning/images/Beans.jpg',
  },
  {
    Ingredient: 'Cauliflower',
    Shorttext: 'For strong & healthy bones',
    'Age group': '6 Month',
    Allergent: 'No',
    Introduction:
      "It is important to add vegetables to your kid's diet. You can start giving cauliflower when they are 6 to 8 months old. The vitamin C in cauliflower helps the babies to get stronger bones and prevent inflammation. Your little one will love the creamy texture and taste of cauliflower.",
    Recipe: 'fks18m5s9qp1ahk',
    Video: 'Cauliflower',
    'How to serve':
      'Every child is different and so will their eating habits. Sometimes your child can start with solid foods early or late depending on their development. It is necessary to consult your pediatrician and seek assistance if you are new to parenting. You can serve the cauliflower either mashed or as big chunks to a 6-month-old. If the cauliflower isn\u2019t mashed, steam large florets until they are completely soft and piercable with a fork. \r\n\r\nWhen your baby is 9 months old, you can try giving them bite-sized pieces of cauliflower florets. But if aren\u2019t confident enough to follow this method you can always serve them mashed. Continue serving the child with cooked cauliflower florets until they can hold a fork and eat on their own.\r',
    'Choking & Allergies':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/does-cauliflower-cause-choking-and-allergies/',
    'Health & Nutrition':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/are-cauliflowers-healthy-for-babies/',
    'Read More':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/how-to-choose-and-store-your-cauliflower/',
    'Nutritional Rating': '3',
    imageUrl:
      'https://forking.riafy.in/csv-to-api/baby-led-weaning/images/Cauliflower.jpg',
  },
  {
    Ingredient: 'Avocado',
    Shorttext: 'Serve fresh from their peels',
    'Age group': '6 Month',
    Allergent: 'No',
    Introduction:
      'Avocados are a great treat your baby can enjoy as soon as she starts on solids. This nutrient-dense fruit helps in brain development and strengthens the immune system. Reep the benefits of avocado by serving it as a soft mash to kids. Your kid will love the creamy and rich taste of avocado.',
    Recipe: 'fks18rrp2bauqdk',
    Video: 'Avocado',
    'How to serve':
      'Every child is different and so will their eating habits. Sometimes your child can start with solid foods early or late depending on their development. It is necessary to consult your pediatrician and seek assistance if you are new to parenting. For first-time eaters like the 6-month-old babies, you must mash the avocado and serve it to the baby. \r\n\r\nAt 9 months of your child, you can start offering the child bite-size avocados. If you feel that your child needs more time to start with bite-size foods you can continue serving mashed avocado. After the child has surpassed the first year, you can try giving the kid half an avocado in its skin or as sliced or diced pieces. \r\n\r',
    'Choking & Allergies':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/does-avocado-cause-choking-and-allergies/',
    'Health & Nutrition':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/are-avocados-healthy-for-babies/',
    'Read More':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/tips-for-feeding-avocado-to-your-kid/',
    'Nutritional Rating': '5',
    imageUrl:
      'https://forking.riafy.in/csv-to-api/baby-led-weaning/images/Avocado.jpg',
  },
  {
    Ingredient: 'Mango',
    Shorttext: 'Strengthen the immune system',
    'Age group': '6 Month',
    Allergent: 'No',
    Introduction:
      'Mangoes are highly nutritious fruit that helps in nourishing baby growth. The fibers in mangoes help digestion and improve bowel movements. It is good for the skin and prevents anemia. Mash the mango very well before giving it to your baby.',
    Recipe: 'fks3cf3dmkjvje',
    Video: 'Mango Puree',
    'How to serve':
      'Every child is different and so will their eating habits. Sometimes your child can start with solid foods early or late depending on their development. It is necessary to consult your pediatrician and seek assistance if you are new to parenting. A 6-month-old baby can be served with a whole mango pit (peeled mango with most of the flesh removed). You can also cut off the flesh and serve them in small slices.\r\n\r\nYou can continue to offer your child mango pits or slices. If you feel that your child is ready for bite-sized pieces feel free to offer them on pre-loaded forks. Encourage your child to use utensils and promote bite-sized food once they have finished one year. \r\n',
    'Choking & Allergies':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/does-mango-cause-choking-and-allergies/',
    'Health & Nutrition':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/are-mangoes-healthy-for-babies/',
    'Read More':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/is-mango-juice-good-for-babies/',
    'Nutritional Rating': '5',
    imageUrl:
      'https://forking.riafy.in/csv-to-api/baby-led-weaning/images/Mango.jpg',
  },
  {
    Ingredient: 'Potato',
    Shorttext: 'Energy powerhouse for babies',
    'Age group': '6 Month',
    Allergent: 'No',
    Introduction:
      'The creamy and soft texture of cooked potatoes makes them easier to swallow for kids. It is good to feed potatoes to babies at of age of 6 to 7 months. The nutrients in potatoes help to maintain the health and growth of the baby.',
    Recipe: 'fks9m8gjvn0bes',
    Video: 'Mashed Potato',
    'How to serve':
      'Every child is different and so will their eating habits. Sometimes your child can start with solid foods early or late depending on their development. It is necessary to consult your pediatrician and seek assistance if you are new to parenting. You can either serve the baby with cooked potato wedges or as mashed food if your baby is 6 months old. Continue offering cooked potato wedges until your child is well-practiced withholding and grasping the food well at 9 months. When they have finished 1 year, you can start offering them bite-sized pieces of cooked potato as finger foods or on a fork.',
    'Choking & Allergies':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/does-potato-cause-choking-and-allergies/',
    'Health & Nutrition':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/are-potatoes-healthy-for-babies/',
    'Read More':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/tips-for-feeding-potatoes-to-your-kid/',
    'Nutritional Rating': '3',
    imageUrl:
      'https://forking.riafy.in/csv-to-api/baby-led-weaning/images/Potato.jpg',
  },
  {
    Ingredient: 'Cereal',
    Shorttext: 'Introduce your baby to new tastes',
    'Age group': '6 Month',
    Allergent: 'No',
    Introduction:
      "Cereals are rich in iron so it's a good choice as a first food. Cereals are popular weaning food for babies.",
    Recipe: 'fks18297k1uns1b',
    Video: 'Cereal',
    'How to serve':
      'Cereals can be served to toddlers around 6 months of age. It can be easily made by combining 1 or 2 tablespoons of cereal with formula or breast milk to create a mushy texture. Once your little one gets adapted to this texture, you can cut back the amount of liquid to make the cereal thicker.',
    'Choking & Allergies':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/does-cereal-cause-choking-and-allergies/',
    'Health & Nutrition':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/are-cereals-healthy-for-babies/',
    'Read More':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/benefits-of-cereals-for-babies/',
    'Nutritional Rating': '3',
    imageUrl:
      'https://forking.riafy.in/csv-to-api/baby-led-weaning/images/Cereal.jpg',
  },
  {
    Ingredient: 'Blueberries',
    Shorttext: 'Best baby food to to self-feed',
    'Age group': '8 Month+',
    Allergent: 'No',
    Introduction:
      'Blueberries are rich in antioxidants and vitamins. These nutrients and fibers help in bone development and indigestion. Its natural sweetness is good for babies.',
    Recipe: 'fks7kslq2oanoc',
    Video: 'Blueberries',
    'How to serve':
      'Every child is different and so will their eating habits. Sometimes your child can start with solid foods early or late depending on their development. It is necessary to consult your pediatrician and seek assistance if you are new to parenting. Blueberries can be served whole or mashed depending on the ripeness. If the strawberry is soft so that it can be squashed when pressed, it can be served right away to a 6-month-old baby after removing the stem. Also, make sure to serve bigger blueberries to avoid swallowing.',
    'Choking & Allergies':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/does-blueberries-cause-choking-and-allergies/',
    'Health & Nutrition':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/are-blueberries-healthy-for-babies/',
    'Read More':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/is-blueberry-juice-good-for-babies/',
    'Nutritional Rating': '2',
    imageUrl:
      'https://forking.riafy.in/csv-to-api/baby-led-weaning/images/Blueberries.jpg',
  },
  {
    Ingredient: 'Spinach',
    Shorttext: 'An ideal veggie for babies',
    'Age group': '6 Month',
    Allergent: 'No',
    Introduction:
      "Spinach is a healthy option for your baby. It's a superfood rich in calcium, potassium, and proteins. Spinach is good for strengthening bones and for keeping immunity high.",
    Recipe: 'fks1j2mv3venb5h',
    Video: 'Spinach',
    'How to serve':
      'For a 9-month-old baby, blueberries can be served sliced vertically from the top to the bottom. For a baby older than 1 year, you are welcome to serve bigger portions if you feel comfortable with it. Always be present near your child when they are feeding.',
    'Choking & Allergies':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/does-spinach-cause-choking-and-allergies/',
    'Health & Nutrition':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/is-spinach-healthy-for-babies/',
    'Read More':
      'https://babyledweaningtipsandfacts.wordpress.com/2022/05/12/how-to-choose-and-store-your-spinach/',
    'Nutritional Rating': '5',
    imageUrl:
      'https://forking.riafy.in/csv-to-api/baby-led-weaning/images/Spinach.jpg',
  },
];

const App = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.search}>Search</Text>
      <Searchbar
       style={{width:'93%',alignSelf:'center'}}
        placeholder="Food name"
        onChangeText={onChangeSearch}
        value={searchQuery}
        
      />
      
      <Text style={styles.food}>Foods</Text>
      <FlatList
        horizontal={false}
        data={DATA}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Image source={{uri: item.imageUrl}} style={styles.image}></Image>
            <Text style={styles.title}>{item.Ingredient}</Text>
            <Text style={styles.shtitle}>{item.Shorttext}</Text>
          </View>
        )}
        keyExtractor={item => item.Ingredient}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  item: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 13.6,
    color: '#30384d',
    fontWeight: '700',

    marginVertical: 3,
    alignSelf: 'flex-start',
  },
  shtitle: {
    fontSize: 11,
    color: '#7e8a9a',
    fontWeight: '500',
    fontFamily: 'Montserrat-Italic-VariableFont_wght',
  },
  search: {
    color: '#30384d',
    fontSize: 19.2,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 13,
  },
  image: {
    height: 100,
    width: 155,
    borderRadius: 7,
    alignSelf: 'center',
  },
  food: {
    color: '#30384d',
    fontSize: 19.2,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export default App;
