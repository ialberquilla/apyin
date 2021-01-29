import React, { useCallback, useEffect, useState } from 'react'
import { Table } from './Components/Table/Table'
import { Loader } from './Components/Loader/Loader'
import { Header } from './Components/Header/Header'
import './App.css'
import CrabMonkey from './assets/CrabMonkey.png'

let lastMove = 0

const aaronData = [
  {
    "token": "DAI",
    "ratesOfBalances": [
      {
        "missingRate": 0,
        "tokensMissing": null,
        "timeIdle": 0
      },
      {
        "missingRate": 0.001329235615847146,
        "tokensMissing": 0,
        "timeIdle": 485659
      }
    ],
    "bucketChangesRates": [
      {
        "startDate": 1578504869,
        "apyBucket": 0,
        "endDate": 1578582513
      },
      {
        "apyBucket": 10,
        "startDate": 1578584972,
        "endDate": 1578586091
      },
      {
        "apyBucket": 30,
        "startDate": 1578586433,
        "endDate": 1578586433
      },
      {
        "apyBucket": 20,
        "startDate": 1578587395,
        "endDate": 1578587718
      },
      {
        "apyBucket": 10,
        "startDate": 1578588028,
        "endDate": 1578588477
      },
      {
        "apyBucket": 0,
        "startDate": 1578588692,
        "endDate": 1578588692
      },
      {
        "apyBucket": 20,
        "startDate": 1578588998,
        "endDate": 1578588998
      },
      {
        "apyBucket": 10,
        "startDate": 1578589524,
        "endDate": 1578591873
      },
      {
        "apyBucket": 30,
        "startDate": 1578592140,
        "endDate": 1578592140
      },
      {
        "apyBucket": 0,
        "startDate": 1578592979,
        "endDate": 1578594548
      },
      {
        "apyBucket": 40,
        "startDate": 1578594708,
        "endDate": 1578596822
      },
      {
        "apyBucket": 0,
        "startDate": 1578596851,
        "endDate": 1578596851
      },
      {
        "apyBucket": 40,
        "startDate": 1578597050,
        "endDate": 1578597050
      },
      {
        "apyBucket": 0,
        "startDate": 1578597333,
        "endDate": 1578601441
      },
      {
        "apyBucket": 10,
        "startDate": 1578601962,
        "endDate": 1578601962
      },
      {
        "apyBucket": 20,
        "startDate": 1578602102,
        "endDate": 1578603749
      },
      {
        "apyBucket": 10,
        "startDate": 1578604240,
        "endDate": 1578604581
      },
      {
        "apyBucket": 40,
        "startDate": 1578604770,
        "endDate": 1578604770
      },
      {
        "apyBucket": 30,
        "startDate": 1578605044,
        "endDate": 1578605044
      },
      {
        "apyBucket": 10,
        "startDate": 1578605162,
        "endDate": 1578605278
      },
      {
        "apyBucket": 0,
        "startDate": 1578605457,
        "endDate": 1578616318
      },
      {
        "apyBucket": 40,
        "startDate": 1578616366,
        "endDate": 1578618853
      },
      {
        "apyBucket": 30,
        "startDate": 1578620440,
        "endDate": 1578621124
      },
      {
        "apyBucket": 20,
        "startDate": 1578621238,
        "endDate": 1578621557
      },
      {
        "apyBucket": 30,
        "startDate": 1578621836,
        "endDate": 1578622446
      },
      {
        "apyBucket": 20,
        "startDate": 1578623030,
        "endDate": 1578623030
      },
      {
        "apyBucket": 10,
        "startDate": 1578623056,
        "endDate": 1578623056
      },
      {
        "apyBucket": 30,
        "startDate": 1578624276,
        "endDate": 1578630403
      },
      {
        "apyBucket": 20,
        "startDate": 1578630512,
        "endDate": 1578632017
      },
      {
        "apyBucket": 40,
        "startDate": 1578632581,
        "endDate": 1578632581
      },
      {
        "apyBucket": 10,
        "startDate": 1578633304,
        "endDate": 1578633802
      },
      {
        "apyBucket": 0,
        "startDate": 1578634128,
        "endDate": 1578652181
      },
      {
        "apyBucket": 10,
        "startDate": 1578652330,
        "endDate": 1578652330
      },
      {
        "apyBucket": 20,
        "startDate": 1578655865,
        "endDate": 1578655865
      },
      {
        "apyBucket": 10,
        "startDate": 1578656587,
        "endDate": 1578659306
      },
      {
        "apyBucket": 30,
        "startDate": 1578659737,
        "endDate": 1578659737
      },
      {
        "apyBucket": 20,
        "startDate": 1578659955,
        "endDate": 1578664892
      },
      {
        "apyBucket": 10,
        "startDate": 1578664932,
        "endDate": 1578667465
      },
      {
        "apyBucket": 20,
        "startDate": 1578668492,
        "endDate": 1578668492
      },
      {
        "apyBucket": 0,
        "startDate": 1578668812,
        "endDate": 1578676758
      },
      {
        "apyBucket": 10,
        "startDate": 1578677490,
        "endDate": 1578677520
      },
      {
        "apyBucket": 20,
        "startDate": 1578678180,
        "endDate": 1578680327
      },
      {
        "apyBucket": 10,
        "startDate": 1578681146,
        "endDate": 1578682923
      },
      {
        "apyBucket": 20,
        "startDate": 1578682937,
        "endDate": 1578682937
      },
      {
        "apyBucket": 10,
        "startDate": 1578684016,
        "endDate": 1578686242
      },
      {
        "apyBucket": 0,
        "startDate": 1578687675,
        "endDate": 1578688570
      },
      {
        "apyBucket": 10,
        "startDate": 1578690570,
        "endDate": 1578695684
      },
      {
        "apyBucket": 20,
        "startDate": 1578700449,
        "endDate": 1578704042
      },
      {
        "apyBucket": 10,
        "startDate": 1578704450,
        "endDate": 1578741463
      },
      {
        "apyBucket": 0,
        "startDate": 1578742419,
        "endDate": 1578749145
      },
      {
        "apyBucket": 20,
        "startDate": 1578749828,
        "endDate": 1578751356
      },
      {
        "apyBucket": 10,
        "startDate": 1578752012,
        "endDate": 1578780853
      },
      {
        "apyBucket": 0,
        "startDate": 1578782773,
        "endDate": 1578831927
      },
      {
        "apyBucket": 10,
        "startDate": 1578833553,
        "endDate": 1578833553
      },
      {
        "apyBucket": 0,
        "startDate": 1578833821,
        "endDate": 1578833821
      },
      {
        "apyBucket": 10,
        "startDate": 1578843655,
        "endDate": 1578856318
      },
      {
        "apyBucket": 0,
        "startDate": 1578856966,
        "endDate": 1578856966
      },
      {
        "apyBucket": 10,
        "startDate": 1578857095,
        "endDate": 1578860233
      },
      {
        "apyBucket": 0,
        "startDate": 1578861125,
        "endDate": 1578947095
      },
      {
        "apyBucket": 10,
        "startDate": 1578948379,
        "endDate": 1578969372
      },
      {
        "apyBucket": 0,
        "startDate": 1578978220,
        "endDate": 1578981405
      },
      {
        "apyBucket": 10,
        "startDate": 1578982566,
        "endDate": 1578998133
      },
      {
        "apyBucket": 0,
        "startDate": 1578998197,
        "endDate": 1578998577
      },
      {
        "apyBucket": 10,
        "startDate": 1578998929,
        "endDate": 1579000048
      },
      {
        "apyBucket": 0,
        "startDate": 1579003555,
        "endDate": 1579003555
      },
      {
        "apyBucket": 10,
        "startDate": 1579003957,
        "endDate": 1579004498
      },
      {
        "apyBucket": 0,
        "startDate": 1579005018,
        "endDate": 1579018080
      },
      {
        "apyBucket": 20,
        "startDate": 1579019572,
        "endDate": 1579020583
      },
      {
        "apyBucket": 10,
        "startDate": 1579020644,
        "endDate": 1579032889
      },
      {
        "apyBucket": 0,
        "startDate": 1579033110,
        "endDate": 1579034654
      },
      {
        "apyBucket": 10,
        "startDate": 1579036354,
        "endDate": 1579047366
      },
      {
        "apyBucket": 0,
        "startDate": 1579047968,
        "endDate": 1579084288
      },
      {
        "apyBucket": 10,
        "startDate": 1579095377,
        "endDate": 1579135601
      },
      {
        "apyBucket": 0,
        "startDate": 1579135743,
        "endDate": 1579166644
      },
      {
        "apyBucket": 10,
        "startDate": 1579167350,
        "endDate": 1579184020
      },
      {
        "apyBucket": 0,
        "startDate": 1579184070,
        "endDate": 1579185328
      },
      {
        "apyBucket": 10,
        "startDate": 1579185433,
        "endDate": 1579213738
      },
      {
        "apyBucket": 0,
        "startDate": 1579213794,
        "endDate": 1579223722
      },
      {
        "apyBucket": 10,
        "startDate": 1579224208,
        "endDate": 1579235301
      },
      {
        "apyBucket": 0,
        "startDate": 1579239353,
        "endDate": 1579240428
      },
      {
        "apyBucket": 10,
        "startDate": 1579246067,
        "endDate": 1579262039
      },
      {
        "apyBucket": 0,
        "startDate": 1579263393,
        "endDate": 1579273754
      },
      {
        "apyBucket": 10,
        "startDate": 1579275646,
        "endDate": 1579275978
      },
      {
        "apyBucket": 0,
        "startDate": 1579277344,
        "endDate": 1579280163
      },
      {
        "apyBucket": 10,
        "startDate": 1579282062,
        "endDate": 1579301705
      },
      {
        "apyBucket": 0,
        "startDate": 1579311272,
        "endDate": 1579743984
      },
      {
        "apyBucket": 10,
        "startDate": 1579744667,
        "endDate": 1579750996
      },
      {
        "apyBucket": 0,
        "startDate": 1579752779,
        "endDate": 1579905454
      },
      {
        "apyBucket": 10,
        "startDate": 1579905505,
        "endDate": 1579907803
      },
      {
        "apyBucket": 40,
        "startDate": 1579909281,
        "endDate": 1579909281
      },
      {
        "apyBucket": 10,
        "startDate": 1579909390,
        "endDate": 1579945001
      },
      {
        "apyBucket": 0,
        "startDate": 1579946734,
        "endDate": 1579950245
      },
      {
        "apyBucket": 10,
        "startDate": 1579950554,
        "endDate": 1579982325
      },
      {
        "apyBucket": 0,
        "startDate": 1579984528,
        "endDate": 1579984528
      },
      {
        "apyBucket": 10,
        "startDate": 1579985652,
        "endDate": 1580067815
      },
      {
        "apyBucket": 0,
        "startDate": 1580069108,
        "endDate": 1580079407
      },
      {
        "apyBucket": 10,
        "startDate": 1580079436,
        "endDate": 1580101283
      },
      {
        "apyBucket": 0,
        "startDate": 1580103253,
        "endDate": 1580103253
      },
      {
        "apyBucket": 10,
        "startDate": 1580103378,
        "endDate": 1580148421
      },
      {
        "apyBucket": 0,
        "startDate": 1580148511,
        "endDate": 1580150183
      },
      {
        "apyBucket": 10,
        "startDate": 1580150583,
        "endDate": 1580163436
      },
      {
        "apyBucket": 0,
        "startDate": 1580165368,
        "endDate": 1580167749
      },
      {
        "apyBucket": 10,
        "startDate": 1580169923,
        "endDate": 1580171851
      },
      {
        "apyBucket": 0,
        "startDate": 1580172185,
        "endDate": 1580172185
      },
      {
        "apyBucket": 10,
        "startDate": 1580173376,
        "endDate": 1580173376
      },
      {
        "apyBucket": 0,
        "startDate": 1580175195,
        "endDate": 1580175195
      },
      {
        "apyBucket": 10,
        "startDate": 1580175938,
        "endDate": 1580205331
      },
      {
        "apyBucket": 0,
        "startDate": 1580206018,
        "endDate": 1580218070
      },
      {
        "apyBucket": 10,
        "startDate": 1580218947,
        "endDate": 1580237954
      },
      {
        "apyBucket": 0,
        "startDate": 1580238437,
        "endDate": 1580241827
      },
      {
        "apyBucket": 10,
        "startDate": 1580248782,
        "endDate": 1580257833
      },
      {
        "apyBucket": 0,
        "startDate": 1580259788,
        "endDate": 1580259788
      },
      {
        "apyBucket": 10,
        "startDate": 1580262807,
        "endDate": 1580305045
      },
      {
        "apyBucket": 0,
        "startDate": 1580306146,
        "endDate": 1580358248
      },
      {
        "apyBucket": 10,
        "startDate": 1580358610,
        "endDate": 1580376030
      },
      {
        "apyBucket": 0,
        "startDate": 1580379109,
        "endDate": 1580379109
      },
      {
        "apyBucket": 10,
        "startDate": 1580387172,
        "endDate": 1580413079
      },
      {
        "apyBucket": 0,
        "startDate": 1580415237,
        "endDate": 1580418918
      },
      {
        "apyBucket": 10,
        "startDate": 1580420544,
        "endDate": 1580448019
      },
      {
        "apyBucket": 0,
        "startDate": 1580452221,
        "endDate": 1580452221
      },
      {
        "apyBucket": 10,
        "startDate": 1580452300,
        "endDate": 1580453021
      },
      {
        "apyBucket": 0,
        "startDate": 1580454763,
        "endDate": 1580454763
      },
      {
        "apyBucket": 10,
        "startDate": 1580456212,
        "endDate": 1580460886
      },
      {
        "apyBucket": 0,
        "startDate": 1580461018,
        "endDate": 1580461018
      },
      {
        "apyBucket": 10,
        "startDate": 1580461186,
        "endDate": 1580463125
      },
      {
        "apyBucket": 0,
        "startDate": 1580463436,
        "endDate": 1580463436
      },
      {
        "apyBucket": 10,
        "startDate": 1580464893,
        "endDate": 1580615273
      },
      {
        "apyBucket": 30,
        "startDate": 1580618528,
        "endDate": 1580618528
      },
      {
        "apyBucket": 10,
        "startDate": 1580618655,
        "endDate": 1580652911
      },
      {
        "apyBucket": 20,
        "startDate": 1580653763,
        "endDate": 1580653763
      },
      {
        "apyBucket": 10,
        "startDate": 1580653814,
        "endDate": 1580748287
      },
      {
        "apyBucket": 20,
        "startDate": 1580748530,
        "endDate": 1580749526
      },
      {
        "apyBucket": 10,
        "startDate": 1580749661,
        "endDate": 1580753176
      },
      {
        "apyBucket": 20,
        "startDate": 1580754512,
        "endDate": 1580756564
      },
      {
        "apyBucket": 10,
        "startDate": 1580756612,
        "endDate": 1580833895
      },
      {
        "apyBucket": 30,
        "startDate": 1580834143,
        "endDate": 1580838329
      },
      {
        "apyBucket": 20,
        "startDate": 1580838586,
        "endDate": 1580839657
      },
      {
        "apyBucket": 10,
        "startDate": 1580840224,
        "endDate": 1580840224
      },
      {
        "apyBucket": 20,
        "startDate": 1580840224,
        "endDate": 1580840224
      },
      {
        "apyBucket": 10,
        "startDate": 1580841253,
        "endDate": 1580952896
      },
      {
        "apyBucket": 0,
        "startDate": 1580953068,
        "endDate": 1580963547
      },
      {
        "apyBucket": 10,
        "startDate": 1580968507,
        "endDate": 1581048212
      },
      {
        "apyBucket": 0,
        "startDate": 1581048331,
        "endDate": 1581050560
      },
      {
        "apyBucket": 10,
        "startDate": 1581051120,
        "endDate": 1581058976
      },
      {
        "apyBucket": 0,
        "startDate": 1581060359,
        "endDate": 1581068646
      },
      {
        "apyBucket": 10,
        "startDate": 1581070484,
        "endDate": 1581108148
      },
      {
        "apyBucket": 20,
        "startDate": 1581108377,
        "endDate": 1581108377
      },
      {
        "apyBucket": 10,
        "startDate": 1581108487,
        "endDate": 1581190158
      },
      {
        "apyBucket": 0,
        "startDate": 1581190738,
        "endDate": 1581195764
      },
      {
        "apyBucket": 10,
        "startDate": 1581195867,
        "endDate": 1581454585
      },
      {
        "apyBucket": 0,
        "startDate": 1581455779,
        "endDate": 1581475869
      },
      {
        "apyBucket": 10,
        "startDate": 1581478087,
        "endDate": 1581478511
      },
      {
        "apyBucket": 0,
        "startDate": 1581479323,
        "endDate": 1581502639
      },
      {
        "apyBucket": 10,
        "startDate": 1581506696,
        "endDate": 1581523887
      },
      {
        "apyBucket": 0,
        "startDate": 1581524713,
        "endDate": 1581525313
      },
      {
        "apyBucket": 10,
        "startDate": 1581525316,
        "endDate": 1581528732
      },
      {
        "apyBucket": 0,
        "startDate": 1581529822,
        "endDate": 1581529822
      },
      {
        "apyBucket": 10,
        "startDate": 1581530333,
        "endDate": 1581557887
      },
      {
        "apyBucket": 0,
        "startDate": 1581560645,
        "endDate": 1581580464
      },
      {
        "apyBucket": 10,
        "startDate": 1581581365,
        "endDate": 1581683337
      },
      {
        "apyBucket": 0,
        "startDate": 1581685664,
        "endDate": 1581688903
      },
      {
        "apyBucket": 10,
        "startDate": 1581690303,
        "endDate": 1581781665
      },
      {
        "apyBucket": 0,
        "startDate": 1581781707,
        "endDate": 1581788525
      },
      {
        "apyBucket": 10,
        "startDate": 1581788621,
        "endDate": 1581854343
      },
      {
        "apyBucket": 30,
        "startDate": 1581855386,
        "endDate": 1581855526
      },
      {
        "apyBucket": 20,
        "startDate": 1581856107,
        "endDate": 1581861352
      },
      {
        "apyBucket": 10,
        "startDate": 1581861352,
        "endDate": 1581870983
      },
      {
        "apyBucket": 20,
        "startDate": 1581871323,
        "endDate": 1581876540
      },
      {
        "apyBucket": 10,
        "startDate": 1581877015,
        "endDate": 1581910950
      },
      {
        "apyBucket": 20,
        "startDate": 1581911204,
        "endDate": 1581911204
      },
      {
        "apyBucket": 10,
        "startDate": 1581911369,
        "endDate": 1581914349
      },
      {
        "apyBucket": 20,
        "startDate": 1581914618,
        "endDate": 1581917577
      },
      {
        "apyBucket": 10,
        "startDate": 1581917888,
        "endDate": 1581917888
      },
      {
        "apyBucket": 20,
        "startDate": 1581918117,
        "endDate": 1581920706
      },
      {
        "apyBucket": 10,
        "startDate": 1581920782,
        "endDate": 1581921248
      },
      {
        "apyBucket": 20,
        "startDate": 1581921762,
        "endDate": 1581922830
      },
      {
        "apyBucket": 10,
        "startDate": 1581922846,
        "endDate": 1581928302
      },
      {
        "apyBucket": 20,
        "startDate": 1581928630,
        "endDate": 1581930559
      },
      {
        "apyBucket": 10,
        "startDate": 1581930632,
        "endDate": 1581956857
      },
      {
        "apyBucket": 50,
        "startDate": 1581956920,
        "endDate": 1581956920
      },
      {
        "apyBucket": 20,
        "startDate": 1581957618,
        "endDate": 1581960239
      },
      {
        "apyBucket": 10,
        "startDate": 1581960475,
        "endDate": 1581961192
      },
      {
        "apyBucket": 40,
        "startDate": 1581961760,
        "endDate": 1581962515
      },
      {
        "apyBucket": 30,
        "startDate": 1581962737,
        "endDate": 1581965673
      },
      {
        "apyBucket": 20,
        "startDate": 1581965769,
        "endDate": 1581969407
      },
      {
        "apyBucket": 10,
        "startDate": 1581969931,
        "endDate": 1581970314
      },
      {
        "apyBucket": 20,
        "startDate": 1581970427,
        "endDate": 1581970564
      },
      {
        "apyBucket": 10,
        "startDate": 1581970710,
        "endDate": 1581985037
      },
      {
        "apyBucket": 30,
        "startDate": 1581985148,
        "endDate": 1581985478
      },
      {
        "apyBucket": 20,
        "startDate": 1581985501,
        "endDate": 1581986728
      },
      {
        "apyBucket": 10,
        "startDate": 1581986960,
        "endDate": 1582010159
      },
      {
        "apyBucket": 40,
        "startDate": 1582012160,
        "endDate": 1582012530
      },
      {
        "apyBucket": 30,
        "startDate": 1582013134,
        "endDate": 1582013134
      },
      {
        "apyBucket": 20,
        "startDate": 1582013395,
        "endDate": 1582017351
      },
      {
        "apyBucket": 10,
        "startDate": 1582017755,
        "endDate": 1582037656
      },
      {
        "apyBucket": 20,
        "startDate": 1582038189,
        "endDate": 1582043543
      },
      {
        "apyBucket": 10,
        "startDate": 1582043685,
        "endDate": 1582150280
      },
      {
        "apyBucket": 20,
        "startDate": 1582150410,
        "endDate": 1582158311
      },
      {
        "apyBucket": 10,
        "startDate": 1582158540,
        "endDate": 1582679428
      },
      {
        "apyBucket": 20,
        "startDate": 1582680149,
        "endDate": 1582680149
      },
      {
        "apyBucket": 10,
        "startDate": 1582680433,
        "endDate": 1582680433
      },
      {
        "apyBucket": 20,
        "startDate": 1582681381,
        "endDate": 1582681381
      },
      {
        "apyBucket": 10,
        "startDate": 1582681781,
        "endDate": 1582764582
      },
      {
        "apyBucket": 0,
        "startDate": 1582766366,
        "endDate": 1582767186
      },
      {
        "apyBucket": 10,
        "startDate": 1582767651,
        "endDate": 1582879578
      },
      {
        "apyBucket": 0,
        "startDate": 1582879769,
        "endDate": 1582879769
      },
      {
        "apyBucket": 40,
        "startDate": 1582881626,
        "endDate": 1582885542
      },
      {
        "apyBucket": 30,
        "startDate": 1582886688,
        "endDate": 1582891785
      },
      {
        "apyBucket": 20,
        "startDate": 1582892288,
        "endDate": 1582895536
      },
      {
        "apyBucket": 10,
        "startDate": 1582895657,
        "endDate": 1582895895
      },
      {
        "apyBucket": 20,
        "startDate": 1582896385,
        "endDate": 1582898146
      },
      {
        "apyBucket": 10,
        "startDate": 1582898207,
        "endDate": 1582898580
      },
      {
        "apyBucket": 20,
        "startDate": 1582901817,
        "endDate": 1582922093
      },
      {
        "apyBucket": 10,
        "startDate": 1582922383,
        "endDate": 1582937390
      },
      {
        "apyBucket": 20,
        "startDate": 1582940265,
        "endDate": 1582940265
      },
      {
        "apyBucket": 10,
        "startDate": 1582940625,
        "endDate": 1582963877
      },
      {
        "apyBucket": 0,
        "startDate": 1582965758,
        "endDate": 1582965770
      },
      {
        "apyBucket": 10,
        "startDate": 1582966376,
        "endDate": 1583020567
      },
      {
        "apyBucket": 20,
        "startDate": 1583020590,
        "endDate": 1583020775
      },
      {
        "apyBucket": 10,
        "startDate": 1583021252,
        "endDate": 1583080286
      },
      {
        "apyBucket": 20,
        "startDate": 1583080421,
        "endDate": 1583085133
      },
      {
        "apyBucket": 10,
        "startDate": 1583085325,
        "endDate": 1583098222
      },
      {
        "apyBucket": 20,
        "startDate": 1583098465,
        "endDate": 1583099809
      },
      {
        "apyBucket": 10,
        "startDate": 1583100124,
        "endDate": 1583100331
      },
      {
        "apyBucket": 20,
        "startDate": 1583100396,
        "endDate": 1583101069
      },
      {
        "apyBucket": 10,
        "startDate": 1583101802,
        "endDate": 1583154701
      },
      {
        "apyBucket": 20,
        "startDate": 1583154727,
        "endDate": 1583163407
      },
      {
        "apyBucket": 10,
        "startDate": 1583163623,
        "endDate": 1583207646
      },
      {
        "apyBucket": 20,
        "startDate": 1583211502,
        "endDate": 1583220597
      },
      {
        "apyBucket": 10,
        "startDate": 1583221468,
        "endDate": 1583231816
      },
      {
        "apyBucket": 0,
        "startDate": 1583234164,
        "endDate": 1583238366
      },
      {
        "apyBucket": 10,
        "startDate": 1583239750,
        "endDate": 1583322600
      },
      {
        "apyBucket": 30,
        "startDate": 1583322690,
        "endDate": 1583325155
      },
      {
        "apyBucket": 10,
        "startDate": 1583325185,
        "endDate": 1583326175
      },
      {
        "apyBucket": 20,
        "startDate": 1583326373,
        "endDate": 1583331998
      },
      {
        "apyBucket": 0,
        "startDate": 1583332115,
        "endDate": 1583617673
      },
      {
        "apyBucket": 10,
        "startDate": 1583617725,
        "endDate": 1583633119
      },
      {
        "apyBucket": 0,
        "startDate": 1583633526,
        "endDate": 1583636311
      },
      {
        "apyBucket": 10,
        "startDate": 1583636702,
        "endDate": 1583645052
      },
      {
        "apyBucket": 0,
        "startDate": 1583645211,
        "endDate": 1583645835
      },
      {
        "apyBucket": 10,
        "startDate": 1583646009,
        "endDate": 1583658844
      },
      {
        "apyBucket": 0,
        "startDate": 1583659306,
        "endDate": 1583829062
      },
      {
        "apyBucket": 10,
        "startDate": 1583829976,
        "endDate": 1583844852
      },
      {
        "apyBucket": 0,
        "startDate": 1583847181,
        "endDate": 1583911860
      },
      {
        "apyBucket": 50,
        "startDate": 1583912240,
        "endDate": 1583912240
      },
      {
        "apyBucket": 20,
        "startDate": 1583912799,
        "endDate": 1583912835
      },
      {
        "apyBucket": 0,
        "startDate": 1583915911,
        "endDate": 1583916011
      },
      {
        "apyBucket": 10,
        "startDate": 1583916325,
        "endDate": 1583988823
      },
      {
        "apyBucket": 0,
        "startDate": 1583988828,
        "endDate": 1583989181
      },
      {
        "apyBucket": 10,
        "startDate": 1583989790,
        "endDate": 1584001189
      },
      {
        "apyBucket": 0,
        "startDate": 1584001532,
        "endDate": 1584005071
      },
      {
        "apyBucket": 10,
        "startDate": 1584005073,
        "endDate": 1584011094
      },
      {
        "apyBucket": 0,
        "startDate": 1584011960,
        "endDate": 1584015453
      },
      {
        "apyBucket": 10,
        "startDate": 1584015543,
        "endDate": 1584021768
      },
      {
        "apyBucket": 20,
        "startDate": 1584022273,
        "endDate": 1584027289
      },
      {
        "apyBucket": 40,
        "startDate": 1584027568,
        "endDate": 1584032012
      },
      {
        "apyBucket": 30,
        "startDate": 1584032084,
        "endDate": 1584033593
      },
      {
        "apyBucket": 40,
        "startDate": 1584034021,
        "endDate": 1584034302
      },
      {
        "apyBucket": 30,
        "startDate": 1584034509,
        "endDate": 1584036220
      },
      {
        "apyBucket": 20,
        "startDate": 1584036412,
        "endDate": 1584037732
      },
      {
        "apyBucket": 30,
        "startDate": 1584037822,
        "endDate": 1584039481
      },
      {
        "apyBucket": 20,
        "startDate": 1584040331,
        "endDate": 1584041365
      },
      {
        "apyBucket": 30,
        "startDate": 1584041467,
        "endDate": 1584042893
      },
      {
        "apyBucket": 20,
        "startDate": 1584043279,
        "endDate": 1584045898
      },
      {
        "apyBucket": 30,
        "startDate": 1584045942,
        "endDate": 1584053245
      },
      {
        "apyBucket": 20,
        "startDate": 1584053348,
        "endDate": 1584056668
      },
      {
        "apyBucket": 30,
        "startDate": 1584056851,
        "endDate": 1584060645
      },
      {
        "apyBucket": 40,
        "startDate": 1584060707,
        "endDate": 1584071466
      },
      {
        "apyBucket": 50,
        "startDate": 1584072580,
        "endDate": 1584077144
      },
      {
        "apyBucket": 40,
        "startDate": 1584077172,
        "endDate": 1584078541
      },
      {
        "apyBucket": 30,
        "startDate": 1584078575,
        "endDate": 1584097816
      },
      {
        "apyBucket": 20,
        "startDate": 1584097979,
        "endDate": 1584116540
      },
      {
        "apyBucket": 30,
        "startDate": 1584116738,
        "endDate": 1584117756
      },
      {
        "apyBucket": 20,
        "startDate": 1584118287,
        "endDate": 1584120695
      },
      {
        "apyBucket": 10,
        "startDate": 1584120765,
        "endDate": 1584121375
      },
      {
        "apyBucket": 20,
        "startDate": 1584121980,
        "endDate": 1584122821
      },
      {
        "apyBucket": 0,
        "startDate": 1584123533,
        "endDate": 1584128886
      },
      {
        "apyBucket": 10,
        "startDate": 1584129130,
        "endDate": 1584170943
      },
      {
        "apyBucket": 20,
        "startDate": 1584171542,
        "endDate": 1584171542
      },
      {
        "apyBucket": 10,
        "startDate": 1584172807,
        "endDate": 1584196502
      },
      {
        "apyBucket": 0,
        "startDate": 1584196868,
        "endDate": 1584196868
      },
      {
        "apyBucket": 10,
        "startDate": 1584197085,
        "endDate": 1584198218
      },
      {
        "apyBucket": 0,
        "startDate": 1584200266,
        "endDate": 1584202147
      },
      {
        "apyBucket": 10,
        "startDate": 1584202846,
        "endDate": 1584222252
      },
      {
        "apyBucket": 0,
        "startDate": 1584222387,
        "endDate": 1584222387
      },
      {
        "apyBucket": 10,
        "startDate": 1584223064,
        "endDate": 1584224968
      },
      {
        "apyBucket": 0,
        "startDate": 1584225324,
        "endDate": 1584225683
      },
      {
        "apyBucket": 10,
        "startDate": 1584226190,
        "endDate": 1584226190
      },
      {
        "apyBucket": 0,
        "startDate": 1584226218,
        "endDate": 1584258532
      },
      {
        "apyBucket": 10,
        "startDate": 1584259435,
        "endDate": 1584288652
      },
      {
        "apyBucket": 0,
        "startDate": 1584288699,
        "endDate": 1584310961
      },
      {
        "apyBucket": 10,
        "startDate": 1584311274,
        "endDate": 1584311274
      },
      {
        "apyBucket": 0,
        "startDate": 1584311395,
        "endDate": 1584320443
      },
      {
        "apyBucket": 10,
        "startDate": 1584321641,
        "endDate": 1584327908
      },
      {
        "apyBucket": 0,
        "startDate": 1584328557,
        "endDate": 1584328557
      },
      {
        "apyBucket": 10,
        "startDate": 1584329202,
        "endDate": 1584330780
      },
      {
        "apyBucket": 0,
        "startDate": 1584335221,
        "endDate": 1584349758
      },
      {
        "apyBucket": 10,
        "startDate": 1584349847,
        "endDate": 1584371862
      },
      {
        "apyBucket": 0,
        "startDate": 1584372142,
        "endDate": 1584372163
      },
      {
        "apyBucket": 10,
        "startDate": 1584372440,
        "endDate": 1584372581
      },
      {
        "apyBucket": 20,
        "startDate": 1584376315,
        "endDate": 1584378995
      },
      {
        "apyBucket": 10,
        "startDate": 1584379818,
        "endDate": 1584554940
      },
      {
        "apyBucket": 0,
        "startDate": 1584555092,
        "endDate": 1584621317
      },
      {
        "apyBucket": 10,
        "startDate": 1584622489,
        "endDate": 1584623990
      },
      {
        "apyBucket": 0,
        "startDate": 1584624777,
        "endDate": 1584627177
      },
      {
        "apyBucket": 10,
        "startDate": 1584628000,
        "endDate": 1584658936
      },
      {
        "apyBucket": 0,
        "startDate": 1584659558,
        "endDate": 1584659558
      },
      {
        "apyBucket": 10,
        "startDate": 1584662002,
        "endDate": 1584666247
      },
      {
        "apyBucket": 0,
        "startDate": 1584668104,
        "endDate": 1584668190
      },
      {
        "apyBucket": 10,
        "startDate": 1584668586,
        "endDate": 1584681059
      },
      {
        "apyBucket": 0,
        "startDate": 1584681714,
        "endDate": 1584686354
      },
      {
        "apyBucket": 10,
        "startDate": 1584686650,
        "endDate": 1584694025
      },
      {
        "apyBucket": 0,
        "startDate": 1584695624,
        "endDate": 1584695624
      },
      {
        "apyBucket": 10,
        "startDate": 1584696212,
        "endDate": 1584723357
      },
      {
        "apyBucket": 0,
        "startDate": 1584724040,
        "endDate": 1584732014
      },
      {
        "apyBucket": 10,
        "startDate": 1584732562,
        "endDate": 1584736538
      },
      {
        "apyBucket": 0,
        "startDate": 1584737368,
        "endDate": 1584737368
      },
      {
        "apyBucket": 10,
        "startDate": 1584737368,
        "endDate": 1584737368
      },
      {
        "apyBucket": 0,
        "startDate": 1584737368,
        "endDate": 1588430921
      },
      {
        "apyBucket": 10,
        "startDate": 1588431470,
        "endDate": 1588434266
      },
      {
        "apyBucket": 0,
        "startDate": 1588434945,
        "endDate": 1588708057
      },
      {
        "apyBucket": 10,
        "startDate": 1588708379,
        "endDate": 1588708464
      },
      {
        "apyBucket": 0,
        "startDate": 1588708733,
        "endDate": 1588743853
      },
      {
        "apyBucket": 40,
        "startDate": 1588744550,
        "endDate": 1588750232
      },
      {
        "apyBucket": 10,
        "startDate": 1588750340,
        "endDate": 1588768119
      },
      {
        "apyBucket": 0,
        "startDate": 1588768460,
        "endDate": 1592509144
      },
      {
        "apyBucket": 10,
        "startDate": 1592509509,
        "endDate": 1592588851
      },
      {
        "apyBucket": 20,
        "startDate": 1592589539,
        "endDate": 1592590234
      },
      {
        "apyBucket": 10,
        "startDate": 1592590307,
        "endDate": 1592646083
      },
      {
        "apyBucket": 20,
        "startDate": 1592646329,
        "endDate": 1592648482
      },
      {
        "apyBucket": 10,
        "startDate": 1592648937,
        "endDate": 1592652585
      },
      {
        "apyBucket": 20,
        "startDate": 1592652593,
        "endDate": 1592654583
      },
      {
        "apyBucket": 10,
        "startDate": 1592654679,
        "endDate": 1592679272
      },
      {
        "apyBucket": 0,
        "startDate": 1592679304,
        "endDate": 1592735842
      },
      {
        "apyBucket": 10,
        "startDate": 1592736192,
        "endDate": 1592739247
      },
      {
        "apyBucket": 0,
        "startDate": 1592739279,
        "endDate": 1593105093
      },
      {
        "apyBucket": 10,
        "startDate": 1593105134,
        "endDate": 1593109232
      },
      {
        "apyBucket": 20,
        "startDate": 1593109417,
        "endDate": 1593114806
      },
      {
        "apyBucket": 10,
        "startDate": 1593114806,
        "endDate": 1593274498
      },
      {
        "apyBucket": 0,
        "startDate": 1593274568,
        "endDate": 1593275513
      },
      {
        "apyBucket": 10,
        "startDate": 1593276541,
        "endDate": 1593277110
      },
      {
        "apyBucket": 0,
        "startDate": 1593277432,
        "endDate": 1593277432
      },
      {
        "apyBucket": 10,
        "startDate": 1593278232,
        "endDate": 1593281609
      },
      {
        "apyBucket": 0,
        "startDate": 1593282208,
        "endDate": 1593633608
      },
      {
        "apyBucket": 10,
        "startDate": 1593633793,
        "endDate": 1593729354
      },
      {
        "apyBucket": 20,
        "startDate": 1593729354,
        "endDate": 1593730219
      },
      {
        "apyBucket": 30,
        "startDate": 1593730507,
        "endDate": 1593730507
      },
      {
        "apyBucket": 50,
        "startDate": 1593730620,
        "endDate": 1593730620
      },
      {
        "apyBucket": 60,
        "startDate": 1593730676,
        "endDate": 1593731607
      },
      {
        "apyBucket": 50,
        "startDate": 1593731665,
        "endDate": 1593731665
      },
      {
        "apyBucket": 40,
        "startDate": 1593731727,
        "endDate": 1593732516
      },
      {
        "apyBucket": 30,
        "startDate": 1593732610,
        "endDate": 1593732649
      },
      {
        "apyBucket": 50,
        "startDate": 1593732882,
        "endDate": 1593734038
      },
      {
        "apyBucket": 40,
        "startDate": 1593734113,
        "endDate": 1593734113
      },
      {
        "apyBucket": 50,
        "startDate": 1593734129,
        "endDate": 1593734129
      },
      {
        "apyBucket": 40,
        "startDate": 1593734132,
        "endDate": 1593734132
      },
      {
        "apyBucket": 50,
        "startDate": 1593734381,
        "endDate": 1593734764
      },
      {
        "apyBucket": 30,
        "startDate": 1593734766,
        "endDate": 1593734766
      },
      {
        "apyBucket": 50,
        "startDate": 1593734766,
        "endDate": 1593734766
      },
      {
        "apyBucket": 20,
        "startDate": 1593734766,
        "endDate": 1593740205
      },
      {
        "apyBucket": 10,
        "startDate": 1593740221,
        "endDate": 1593741365
      },
      {
        "apyBucket": 20,
        "startDate": 1593741431,
        "endDate": 1593741578
      },
      {
        "apyBucket": 10,
        "startDate": 1593742107,
        "endDate": 1593742532
      },
      {
        "apyBucket": 20,
        "startDate": 1593742642,
        "endDate": 1593746896
      },
      {
        "apyBucket": 10,
        "startDate": 1593746930,
        "endDate": 1593747263
      },
      {
        "apyBucket": 20,
        "startDate": 1593747297,
        "endDate": 1593747299
      },
      {
        "apyBucket": 10,
        "startDate": 1593747323,
        "endDate": 1593756340
      },
      {
        "apyBucket": 20,
        "startDate": 1593756548,
        "endDate": 1593762193
      },
      {
        "apyBucket": 10,
        "startDate": 1593762224,
        "endDate": 1593762487
      },
      {
        "apyBucket": 20,
        "startDate": 1593762560,
        "endDate": 1593762944
      },
      {
        "apyBucket": 10,
        "startDate": 1593763097,
        "endDate": 1593764531
      },
      {
        "apyBucket": 20,
        "startDate": 1593764531,
        "endDate": 1593767454
      },
      {
        "apyBucket": 10,
        "startDate": 1593768175,
        "endDate": 1593792256
      },
      {
        "apyBucket": 20,
        "startDate": 1593792332,
        "endDate": 1593793825
      },
      {
        "apyBucket": 10,
        "startDate": 1593794072,
        "endDate": 1593801246
      },
      {
        "apyBucket": 20,
        "startDate": 1593801372,
        "endDate": 1593801800
      },
      {
        "apyBucket": 10,
        "startDate": 1593802977,
        "endDate": 1593803262
      },
      {
        "apyBucket": 20,
        "startDate": 1593803368,
        "endDate": 1593803826
      },
      {
        "apyBucket": 10,
        "startDate": 1593803847,
        "endDate": 1594042581
      },
      {
        "apyBucket": 20,
        "startDate": 1594043394,
        "endDate": 1594043969
      },
      {
        "apyBucket": 10,
        "startDate": 1594044806,
        "endDate": 1594081860
      },
      {
        "apyBucket": 20,
        "startDate": 1594082503,
        "endDate": 1594085634
      },
      {
        "apyBucket": 10,
        "startDate": 1594085818,
        "endDate": 1594097869
      },
      {
        "apyBucket": 20,
        "startDate": 1594098178,
        "endDate": 1594099276
      },
      {
        "apyBucket": 10,
        "startDate": 1594099518,
        "endDate": 1594188918
      },
      {
        "apyBucket": 50,
        "startDate": 1594188927,
        "endDate": 1594193074
      },
      {
        "apyBucket": 30,
        "startDate": 1594193095,
        "endDate": 1594193107
      },
      {
        "apyBucket": 20,
        "startDate": 1594193120,
        "endDate": 1594195286
      },
      {
        "apyBucket": 10,
        "startDate": 1594195609,
        "endDate": 1594199208
      },
      {
        "apyBucket": 20,
        "startDate": 1594199933,
        "endDate": 1594203961
      },
      {
        "apyBucket": 10,
        "startDate": 1594203970,
        "endDate": 1594204515
      },
      {
        "apyBucket": 20,
        "startDate": 1594205238,
        "endDate": 1594206654
      },
      {
        "apyBucket": 10,
        "startDate": 1594206811,
        "endDate": 1594209377
      },
      {
        "apyBucket": 20,
        "startDate": 1594209389,
        "endDate": 1594210112
      },
      {
        "apyBucket": 10,
        "startDate": 1594210152,
        "endDate": 1594221823
      },
      {
        "apyBucket": 20,
        "startDate": 1594221833,
        "endDate": 1594224742
      },
      {
        "apyBucket": 10,
        "startDate": 1594224769,
        "endDate": 1594676900
      },
      {
        "apyBucket": 20,
        "startDate": 1594676965,
        "endDate": 1594678522
      },
      {
        "apyBucket": 10,
        "startDate": 1594678542,
        "endDate": 1594702711
      },
      {
        "apyBucket": 20,
        "startDate": 1594702982,
        "endDate": 1594702982
      },
      {
        "apyBucket": 10,
        "startDate": 1594703929,
        "endDate": 1594709716
      },
      {
        "apyBucket": 20,
        "startDate": 1594711008,
        "endDate": 1594713850
      },
      {
        "apyBucket": 10,
        "startDate": 1594715272,
        "endDate": 1595141077
      },
      {
        "apyBucket": 0,
        "startDate": 1595141670,
        "endDate": 1595144864
      },
      {
        "apyBucket": 10,
        "startDate": 1595145274,
        "endDate": 1595145274
      },
      {
        "apyBucket": 0,
        "startDate": 1595145369,
        "endDate": 1595425437
      },
      {
        "apyBucket": 10,
        "startDate": 1595425849,
        "endDate": 1595442792
      },
      {
        "apyBucket": 20,
        "startDate": 1595442792,
        "endDate": 1595443865
      },
      {
        "apyBucket": 10,
        "startDate": 1595444032,
        "endDate": 1595449898
      },
      {
        "apyBucket": 30,
        "startDate": 1595450538,
        "endDate": 1595450602
      },
      {
        "apyBucket": 20,
        "startDate": 1595451192,
        "endDate": 1595452517
      },
      {
        "apyBucket": 10,
        "startDate": 1595452616,
        "endDate": 1595452629
      },
      {
        "apyBucket": 30,
        "startDate": 1595452747,
        "endDate": 1595455146
      },
      {
        "apyBucket": 20,
        "startDate": 1595455382,
        "endDate": 1595456110
      },
      {
        "apyBucket": 10,
        "startDate": 1595456110,
        "endDate": 1595456195
      },
      {
        "apyBucket": 20,
        "startDate": 1595456356,
        "endDate": 1595474207
      },
      {
        "apyBucket": 10,
        "startDate": 1595474302,
        "endDate": 1595481829
      },
      {
        "apyBucket": 20,
        "startDate": 1595482180,
        "endDate": 1595486258
      },
      {
        "apyBucket": 30,
        "startDate": 1595486760,
        "endDate": 1595486760
      },
      {
        "apyBucket": 20,
        "startDate": 1595486760,
        "endDate": 1595486760
      },
      {
        "apyBucket": 30,
        "startDate": 1595486827,
        "endDate": 1595491867
      },
      {
        "apyBucket": 10,
        "startDate": 1595491881,
        "endDate": 1595492203
      },
      {
        "apyBucket": 30,
        "startDate": 1595492515,
        "endDate": 1595494697
      },
      {
        "apyBucket": 40,
        "startDate": 1595495074,
        "endDate": 1595498948
      },
      {
        "apyBucket": 50,
        "startDate": 1595499125,
        "endDate": 1595501831
      },
      {
        "apyBucket": 60,
        "startDate": 1595502161,
        "endDate": 1595506713
      },
      {
        "apyBucket": 50,
        "startDate": 1595506736,
        "endDate": 1595508731
      },
      {
        "apyBucket": 60,
        "startDate": 1595508833,
        "endDate": 1595509780
      },
      {
        "apyBucket": 50,
        "startDate": 1595509790,
        "endDate": 1595510243
      },
      {
        "apyBucket": 40,
        "startDate": 1595510293,
        "endDate": 1595510293
      },
      {
        "apyBucket": 50,
        "startDate": 1595510293,
        "endDate": 1595510293
      },
      {
        "apyBucket": 40,
        "startDate": 1595510313,
        "endDate": 1595510998
      },
      {
        "apyBucket": 50,
        "startDate": 1595511284,
        "endDate": 1595511401
      },
      {
        "apyBucket": 40,
        "startDate": 1595511418,
        "endDate": 1595511526
      },
      {
        "apyBucket": 30,
        "startDate": 1595511869,
        "endDate": 1595511869
      },
      {
        "apyBucket": 40,
        "startDate": 1595511992,
        "endDate": 1595512189
      },
      {
        "apyBucket": 30,
        "startDate": 1595512262,
        "endDate": 1595514650
      },
      {
        "apyBucket": 20,
        "startDate": 1595514901,
        "endDate": 1595519727
      },
      {
        "apyBucket": 10,
        "startDate": 1595519845,
        "endDate": 1595521096
      },
      {
        "apyBucket": 20,
        "startDate": 1595521124,
        "endDate": 1595522895
      },
      {
        "apyBucket": 10,
        "startDate": 1595523397,
        "endDate": 1595531005
      },
      {
        "apyBucket": 30,
        "startDate": 1595531010,
        "endDate": 1595531010
      },
      {
        "apyBucket": 60,
        "startDate": 1595531224,
        "endDate": 1595533270
      },
      {
        "apyBucket": 50,
        "startDate": 1595533271,
        "endDate": 1595534399
      },
      {
        "apyBucket": 40,
        "startDate": 1595534558,
        "endDate": 1595537912
      },
      {
        "apyBucket": 10,
        "startDate": 1595537912,
        "endDate": 1595601601
      },
      {
        "apyBucket": 20,
        "startDate": 1595601898,
        "endDate": 1595601981
      },
      {
        "apyBucket": 40,
        "startDate": 1595602025,
        "endDate": 1595602696
      },
      {
        "apyBucket": 30,
        "startDate": 1595602790,
        "endDate": 1595604695
      },
      {
        "apyBucket": 40,
        "startDate": 1595605071,
        "endDate": 1595605716
      },
      {
        "apyBucket": 30,
        "startDate": 1595605756,
        "endDate": 1595608299
      },
      {
        "apyBucket": 20,
        "startDate": 1595608375,
        "endDate": 1595628212
      },
      {
        "apyBucket": 50,
        "startDate": 1595628302,
        "endDate": 1595629570
      },
      {
        "apyBucket": 40,
        "startDate": 1595629610,
        "endDate": 1595632912
      },
      {
        "apyBucket": 10,
        "startDate": 1595632945,
        "endDate": 1595670163
      },
      {
        "apyBucket": 0,
        "startDate": 1595670499,
        "endDate": 1595792883
      },
      {
        "apyBucket": 10,
        "startDate": 1595793173,
        "endDate": 1595793173
      },
      {
        "apyBucket": 0,
        "startDate": 1595793173,
        "endDate": 1595793173
      },
      {
        "apyBucket": 10,
        "startDate": 1595793267,
        "endDate": 1595827773
      },
      {
        "apyBucket": 0,
        "startDate": 1595828884,
        "endDate": 1595834340
      },
      {
        "apyBucket": 10,
        "startDate": 1595835181,
        "endDate": 1595835181
      },
      {
        "apyBucket": 0,
        "startDate": 1595835253,
        "endDate": 1595863318
      },
      {
        "apyBucket": 10,
        "startDate": 1595863322,
        "endDate": 1595899131
      },
      {
        "apyBucket": 20,
        "startDate": 1595899351,
        "endDate": 1595901473
      },
      {
        "apyBucket": 10,
        "startDate": 1595901801,
        "endDate": 1595918362
      },
      {
        "apyBucket": 20,
        "startDate": 1595919382,
        "endDate": 1595921250
      },
      {
        "apyBucket": 10,
        "startDate": 1595921399,
        "endDate": 1595945412
      },
      {
        "apyBucket": 20,
        "startDate": 1595946302,
        "endDate": 1595948534
      },
      {
        "apyBucket": 30,
        "startDate": 1595948756,
        "endDate": 1595949082
      },
      {
        "apyBucket": 20,
        "startDate": 1595949255,
        "endDate": 1595949882
      },
      {
        "apyBucket": 10,
        "startDate": 1595950002,
        "endDate": 1595950649
      },
      {
        "apyBucket": 20,
        "startDate": 1595950829,
        "endDate": 1595950829
      },
      {
        "apyBucket": 40,
        "startDate": 1595950854,
        "endDate": 1595951556
      },
      {
        "apyBucket": 30,
        "startDate": 1595952252,
        "endDate": 1595952551
      },
      {
        "apyBucket": 10,
        "startDate": 1595952590,
        "endDate": 1595955720
      },
      {
        "apyBucket": 20,
        "startDate": 1595955724,
        "endDate": 1595956661
      },
      {
        "apyBucket": 10,
        "startDate": 1595956907,
        "endDate": 1596012895
      },
      {
        "apyBucket": 60,
        "startDate": 1596013425,
        "endDate": 1596015873
      },
      {
        "apyBucket": 50,
        "startDate": 1596016359,
        "endDate": 1596019217
      },
      {
        "apyBucket": 30,
        "startDate": 1596019623,
        "endDate": 1596028248
      },
      {
        "apyBucket": 10,
        "startDate": 1596028399,
        "endDate": 1596036694
      },
      {
        "apyBucket": 20,
        "startDate": 1596037095,
        "endDate": 1596045760
      },
      {
        "apyBucket": 30,
        "startDate": 1596046226,
        "endDate": 1596047738
      },
      {
        "apyBucket": 20,
        "startDate": 1596047971,
        "endDate": 1596048593
      },
      {
        "apyBucket": 10,
        "startDate": 1596048681,
        "endDate": 1596150626
      },
      {
        "apyBucket": 20,
        "startDate": 1596151156,
        "endDate": 1596151800
      },
      {
        "apyBucket": 10,
        "startDate": 1596152145,
        "endDate": 1596348983
      },
      {
        "apyBucket": 0,
        "startDate": 1596349144,
        "endDate": 1596736145
      },
      {
        "apyBucket": 10,
        "startDate": 1596737433,
        "endDate": 1596768109
      },
      {
        "apyBucket": 0,
        "startDate": 1596769209,
        "endDate": 1596785203
      },
      {
        "apyBucket": 10,
        "startDate": 1596786100,
        "endDate": 1596993214
      },
      {
        "apyBucket": 0,
        "startDate": 1596993405,
        "endDate": 1597004816
      },
      {
        "apyBucket": 10,
        "startDate": 1597006158,
        "endDate": 1597017509
      },
      {
        "apyBucket": 0,
        "startDate": 1597017519,
        "endDate": 1597030660
      },
      {
        "apyBucket": 10,
        "startDate": 1597031380,
        "endDate": 1597034199
      },
      {
        "apyBucket": 0,
        "startDate": 1597034508,
        "endDate": 1597076135
      },
      {
        "apyBucket": 10,
        "startDate": 1597076680,
        "endDate": 1597142701
      },
      {
        "apyBucket": 0,
        "startDate": 1597142806,
        "endDate": 1597351703
      },
      {
        "apyBucket": 10,
        "startDate": 1597351956,
        "endDate": 1597375255
      },
      {
        "apyBucket": 0,
        "startDate": 1597375317,
        "endDate": 1598286238
      },
      {
        "apyBucket": 10,
        "startDate": 1598286380,
        "endDate": 1598332811
      },
      {
        "apyBucket": 0,
        "startDate": 1598333280,
        "endDate": 1598817780
      },
      {
        "apyBucket": 10,
        "startDate": 1598818121,
        "endDate": 1598901477
      },
      {
        "apyBucket": 20,
        "startDate": 1598901593,
        "endDate": 1598901593
      },
      {
        "apyBucket": 10,
        "startDate": 1598901639,
        "endDate": 1599123128
      },
      {
        "apyBucket": 0,
        "startDate": 1599123469,
        "endDate": 1599129216
      },
      {
        "apyBucket": 10,
        "startDate": 1599129496,
        "endDate": 1599149580
      },
      {
        "apyBucket": 0,
        "startDate": 1599149846,
        "endDate": 1599150696
      },
      {
        "apyBucket": 10,
        "startDate": 1599150834,
        "endDate": 1599154487
      },
      {
        "apyBucket": 0,
        "startDate": 1599154891,
        "endDate": 1599226854
      },
      {
        "apyBucket": 10,
        "startDate": 1599228104,
        "endDate": 1599233160
      },
      {
        "apyBucket": 20,
        "startDate": 1599234095,
        "endDate": 1599235800
      },
      {
        "apyBucket": 10,
        "startDate": 1599236309,
        "endDate": 1599250753
      },
      {
        "apyBucket": 30,
        "startDate": 1599251578,
        "endDate": 1599259498
      },
      {
        "apyBucket": 10,
        "startDate": 1599259521,
        "endDate": 1599292259
      },
      {
        "apyBucket": 20,
        "startDate": 1599292334,
        "endDate": 1599295547
      },
      {
        "apyBucket": 10,
        "startDate": 1599295736,
        "endDate": 1599687111
      },
      {
        "apyBucket": 30,
        "startDate": 1599687992,
        "endDate": 1599691166
      },
      {
        "apyBucket": 10,
        "startDate": 1599691406,
        "endDate": 1599726275
      },
      {
        "apyBucket": 20,
        "startDate": 1599726608,
        "endDate": 1599726697
      },
      {
        "apyBucket": 10,
        "startDate": 1599726945,
        "endDate": 1599727291
      },
      {
        "apyBucket": 20,
        "startDate": 1599727325,
        "endDate": 1599738672
      },
      {
        "apyBucket": 10,
        "startDate": 1599738688,
        "endDate": 1599741251
      },
      {
        "apyBucket": 20,
        "startDate": 1599741460,
        "endDate": 1599743536
      },
      {
        "apyBucket": 30,
        "startDate": 1599744270,
        "endDate": 1599745496
      },
      {
        "apyBucket": 20,
        "startDate": 1599746270,
        "endDate": 1599746536
      },
      {
        "apyBucket": 30,
        "startDate": 1599746665,
        "endDate": 1599756617
      },
      {
        "apyBucket": 20,
        "startDate": 1599756745,
        "endDate": 1599757850
      },
      {
        "apyBucket": 30,
        "startDate": 1599758024,
        "endDate": 1599761790
      },
      {
        "apyBucket": 20,
        "startDate": 1599761955,
        "endDate": 1599765538
      },
      {
        "apyBucket": 10,
        "startDate": 1599766337,
        "endDate": 1599836487
      },
      {
        "apyBucket": 20,
        "startDate": 1599836783,
        "endDate": 1599836863
      },
      {
        "apyBucket": 10,
        "startDate": 1599836973,
        "endDate": 1599873520
      },
      {
        "apyBucket": 20,
        "startDate": 1599873781,
        "endDate": 1599873832
      },
      {
        "apyBucket": 10,
        "startDate": 1599873867,
        "endDate": 1599948910
      },
      {
        "apyBucket": 50,
        "startDate": 1599949329,
        "endDate": 1599949329
      },
      {
        "apyBucket": 10,
        "startDate": 1599949624,
        "endDate": 1600058910
      },
      {
        "apyBucket": 20,
        "startDate": 1600060006,
        "endDate": 1600063227
      },
      {
        "apyBucket": 10,
        "startDate": 1600063943,
        "endDate": 1600067590
      },
      {
        "apyBucket": 20,
        "startDate": 1600068259,
        "endDate": 1600068259
      },
      {
        "apyBucket": 40,
        "startDate": 1600068401,
        "endDate": 1600079565
      },
      {
        "apyBucket": 30,
        "startDate": 1600079829,
        "endDate": 1600080572
      },
      {
        "apyBucket": 40,
        "startDate": 1600080946,
        "endDate": 1600083220
      },
      {
        "apyBucket": 30,
        "startDate": 1600083222,
        "endDate": 1600083222
      },
      {
        "apyBucket": 40,
        "startDate": 1600083275,
        "endDate": 1600083688
      },
      {
        "apyBucket": 30,
        "startDate": 1600083751,
        "endDate": 1600083949
      },
      {
        "apyBucket": 40,
        "startDate": 1600084042,
        "endDate": 1600084691
      },
      {
        "apyBucket": 20,
        "startDate": 1600084985,
        "endDate": 1600085075
      },
      {
        "apyBucket": 30,
        "startDate": 1600085226,
        "endDate": 1600087398
      },
      {
        "apyBucket": 40,
        "startDate": 1600087754,
        "endDate": 1600109429
      },
      {
        "apyBucket": 100,
        "startDate": 1600109509,
        "endDate": 1600111630
      },
      {
        "apyBucket": 90,
        "startDate": 1600111740,
        "endDate": 1600115831
      },
      {
        "apyBucket": 80,
        "startDate": 1600115831,
        "endDate": 1600115831
      },
      {
        "apyBucket": 90,
        "startDate": 1600115831,
        "endDate": 1600115831
      },
      {
        "apyBucket": 80,
        "startDate": 1600115928,
        "endDate": 1600117067
      },
      {
        "apyBucket": 70,
        "startDate": 1600117082,
        "endDate": 1600124267
      },
      {
        "apyBucket": 60,
        "startDate": 1600124317,
        "endDate": 1600124317
      },
      {
        "apyBucket": 50,
        "startDate": 1600124421,
        "endDate": 1600128269
      },
      {
        "apyBucket": 60,
        "startDate": 1600128538,
        "endDate": 1600131906
      },
      {
        "apyBucket": 50,
        "startDate": 1600131938,
        "endDate": 1600136157
      },
      {
        "apyBucket": 60,
        "startDate": 1600136281,
        "endDate": 1600138673
      },
      {
        "apyBucket": 50,
        "startDate": 1600138819,
        "endDate": 1600140939
      },
      {
        "apyBucket": 60,
        "startDate": 1600141039,
        "endDate": 1600141300
      },
      {
        "apyBucket": 50,
        "startDate": 1600141914,
        "endDate": 1600147809
      },
      {
        "apyBucket": 40,
        "startDate": 1600148218,
        "endDate": 1600148270
      },
      {
        "apyBucket": 50,
        "startDate": 1600149169,
        "endDate": 1600149169
      },
      {
        "apyBucket": 60,
        "startDate": 1600149760,
        "endDate": 1600149887
      },
      {
        "apyBucket": 70,
        "startDate": 1600150130,
        "endDate": 1600150130
      },
      {
        "apyBucket": 110,
        "startDate": 1600150272,
        "endDate": 1600150272
      },
      {
        "apyBucket": 100,
        "startDate": 1600150458,
        "endDate": 1600151142
      },
      {
        "apyBucket": 90,
        "startDate": 1600151192,
        "endDate": 1600151314
      },
      {
        "apyBucket": 70,
        "startDate": 1600151797,
        "endDate": 1600152578
      },
      {
        "apyBucket": 40,
        "startDate": 1600152946,
        "endDate": 1600162328
      },
      {
        "apyBucket": 30,
        "startDate": 1600162355,
        "endDate": 1600171542
      },
      {
        "apyBucket": 20,
        "startDate": 1600172556,
        "endDate": 1600173615
      },
      {
        "apyBucket": 30,
        "startDate": 1600174475,
        "endDate": 1600181692
      },
      {
        "apyBucket": 20,
        "startDate": 1600181968,
        "endDate": 1600182786
      },
      {
        "apyBucket": 10,
        "startDate": 1600182822,
        "endDate": 1600189138
      },
      {
        "apyBucket": 20,
        "startDate": 1600189830,
        "endDate": 1600189830
      },
      {
        "apyBucket": 30,
        "startDate": 1600189923,
        "endDate": 1600192329
      },
      {
        "apyBucket": 20,
        "startDate": 1600192550,
        "endDate": 1600193597
      },
      {
        "apyBucket": 10,
        "startDate": 1600193673,
        "endDate": 1600203811
      },
      {
        "apyBucket": 20,
        "startDate": 1600204896,
        "endDate": 1600210192
      },
      {
        "apyBucket": 10,
        "startDate": 1600210735,
        "endDate": 1600223644
      },
      {
        "apyBucket": 100,
        "startDate": 1600224150,
        "endDate": 1600224524
      },
      {
        "apyBucket": 90,
        "startDate": 1600224593,
        "endDate": 1600225427
      },
      {
        "apyBucket": 80,
        "startDate": 1600225445,
        "endDate": 1600225941
      },
      {
        "apyBucket": 70,
        "startDate": 1600226456,
        "endDate": 1600227504
      },
      {
        "apyBucket": 60,
        "startDate": 1600227529,
        "endDate": 1600228200
      },
      {
        "apyBucket": 40,
        "startDate": 1600228234,
        "endDate": 1600230261
      },
      {
        "apyBucket": 50,
        "startDate": 1600230310,
        "endDate": 1600230310
      },
      {
        "apyBucket": 40,
        "startDate": 1600230583,
        "endDate": 1600231428
      },
      {
        "apyBucket": 30,
        "startDate": 1600231596,
        "endDate": 1600232789
      },
      {
        "apyBucket": 20,
        "startDate": 1600232965,
        "endDate": 1600237433
      },
      {
        "apyBucket": 10,
        "startDate": 1600237476,
        "endDate": 1600240158
      },
      {
        "apyBucket": 30,
        "startDate": 1600240659,
        "endDate": 1600240659
      },
      {
        "apyBucket": 20,
        "startDate": 1600241319,
        "endDate": 1600242685
      },
      {
        "apyBucket": 10,
        "startDate": 1600243032,
        "endDate": 1600252155
      },
      {
        "apyBucket": 20,
        "startDate": 1600252538,
        "endDate": 1600252995
      },
      {
        "apyBucket": 10,
        "startDate": 1600253526,
        "endDate": 1600272590
      },
      {
        "apyBucket": 0,
        "startDate": 1600272659,
        "endDate": 1600301759
      },
      {
        "apyBucket": 10,
        "startDate": 1600301964,
        "endDate": 1600354129
      },
      {
        "apyBucket": 20,
        "startDate": 1600354225,
        "endDate": 1600358826
      },
      {
        "apyBucket": 10,
        "startDate": 1600359513,
        "endDate": 1600368725
      },
      {
        "apyBucket": 20,
        "startDate": 1600368871,
        "endDate": 1600373941
      },
      {
        "apyBucket": 10,
        "startDate": 1600374224,
        "endDate": 1600374290
      },
      {
        "apyBucket": 20,
        "startDate": 1600374371,
        "endDate": 1600374371
      },
      {
        "apyBucket": 10,
        "startDate": 1600374419,
        "endDate": 1600381123
      },
      {
        "apyBucket": 0,
        "startDate": 1600381131,
        "endDate": 1600382335
      },
      {
        "apyBucket": 10,
        "startDate": 1600383056,
        "endDate": 1600387431
      },
      {
        "apyBucket": 20,
        "startDate": 1600387463,
        "endDate": 1600389700
      },
      {
        "apyBucket": 30,
        "startDate": 1600389737,
        "endDate": 1600389737
      },
      {
        "apyBucket": 20,
        "startDate": 1600390596,
        "endDate": 1600390679
      },
      {
        "apyBucket": 30,
        "startDate": 1600391120,
        "endDate": 1600392701
      },
      {
        "apyBucket": 20,
        "startDate": 1600392845,
        "endDate": 1600393923
      },
      {
        "apyBucket": 30,
        "startDate": 1600393945,
        "endDate": 1600393945
      },
      {
        "apyBucket": 40,
        "startDate": 1600394058,
        "endDate": 1600394410
      },
      {
        "apyBucket": 30,
        "startDate": 1600394623,
        "endDate": 1600394723
      },
      {
        "apyBucket": 40,
        "startDate": 1600395817,
        "endDate": 1600397809
      },
      {
        "apyBucket": 90,
        "startDate": 1600397873,
        "endDate": 1600400030
      },
      {
        "apyBucket": 30,
        "startDate": 1600400171,
        "endDate": 1600402466
      },
      {
        "apyBucket": 20,
        "startDate": 1600402576,
        "endDate": 1600405930
      },
      {
        "apyBucket": 70,
        "startDate": 1600406188,
        "endDate": 1600407981
      },
      {
        "apyBucket": 60,
        "startDate": 1600408072,
        "endDate": 1600409991
      },
      {
        "apyBucket": 50,
        "startDate": 1600410000,
        "endDate": 1600415757
      },
      {
        "apyBucket": 40,
        "startDate": 1600415803,
        "endDate": 1600422680
      },
      {
        "apyBucket": 50,
        "startDate": 1600422791,
        "endDate": 1600430002
      },
      {
        "apyBucket": 40,
        "startDate": 1600430002,
        "endDate": 1600433792
      },
      {
        "apyBucket": 50,
        "startDate": 1600433842,
        "endDate": 1600438631
      },
      {
        "apyBucket": 30,
        "startDate": 1600438816,
        "endDate": 1600439542
      },
      {
        "apyBucket": 20,
        "startDate": 1600439716,
        "endDate": 1600439751
      },
      {
        "apyBucket": 50,
        "startDate": 1600439809,
        "endDate": 1600439809
      },
      {
        "apyBucket": 40,
        "startDate": 1600440091,
        "endDate": 1600440729
      },
      {
        "apyBucket": 50,
        "startDate": 1600440774,
        "endDate": 1600456758
      },
      {
        "apyBucket": 40,
        "startDate": 1600456827,
        "endDate": 1600465749
      },
      {
        "apyBucket": 30,
        "startDate": 1600466079,
        "endDate": 1600466783
      },
      {
        "apyBucket": 10,
        "startDate": 1600466905,
        "endDate": 1600529823
      },
      {
        "apyBucket": 40,
        "startDate": 1600530320,
        "endDate": 1600532024
      },
      {
        "apyBucket": 30,
        "startDate": 1600532153,
        "endDate": 1600536478
      },
      {
        "apyBucket": 10,
        "startDate": 1600537081,
        "endDate": 1600636373
      },
      {
        "apyBucket": 0,
        "startDate": 1600636473,
        "endDate": 1600649138
      },
      {
        "apyBucket": 10,
        "startDate": 1600649476,
        "endDate": 1600653763
      },
      {
        "apyBucket": 0,
        "startDate": 1600653791,
        "endDate": 1600657957
      },
      {
        "apyBucket": 10,
        "startDate": 1600659793,
        "endDate": 1600678248
      },
      {
        "apyBucket": 0,
        "startDate": 1600678734,
        "endDate": 1601075792
      },
      {
        "apyBucket": 10,
        "startDate": 1601076266,
        "endDate": 1601089449
      },
      {
        "apyBucket": 0,
        "startDate": 1601090165,
        "endDate": 1601092415
      },
      {
        "apyBucket": 10,
        "startDate": 1601092672,
        "endDate": 1601104383
      },
      {
        "apyBucket": 0,
        "startDate": 1601105053,
        "endDate": 1601106494
      },
      {
        "apyBucket": 10,
        "startDate": 1601106532,
        "endDate": 1601143266
      },
      {
        "apyBucket": 0,
        "startDate": 1601144028,
        "endDate": 1602425538
      },
      {
        "apyBucket": 10,
        "startDate": 1602426396,
        "endDate": 1602496280
      },
      {
        "apyBucket": 0,
        "startDate": 1602497609,
        "endDate": 1603811222
      },
      {
        "apyBucket": 10,
        "startDate": 1603811355,
        "endDate": 1603850325
      },
      {
        "apyBucket": 0,
        "startDate": 1603850335,
        "endDate": 1603884832
      },
      {
        "apyBucket": 10,
        "startDate": 1603885249,
        "endDate": 1603913810
      },
      {
        "apyBucket": 0,
        "startDate": 1603914124,
        "endDate": 1603924247
      },
      {
        "apyBucket": 10,
        "startDate": 1603924375,
        "endDate": 1603925644
      },
      {
        "apyBucket": 0,
        "startDate": 1603925796,
        "endDate": 1605889550
      },
      {
        "apyBucket": 10,
        "startDate": 1605889822,
        "endDate": 1605960590
      },
      {
        "apyBucket": 0,
        "startDate": 1605960900,
        "endDate": 1605960900
      },
      {
        "apyBucket": 10,
        "startDate": 1605961108,
        "endDate": 1605961108
      },
      {
        "apyBucket": 0,
        "startDate": 1605961187,
        "endDate": 1606120473
      },
      {
        "apyBucket": 10,
        "startDate": 1606121285,
        "endDate": 1606131861
      },
      {
        "apyBucket": 0,
        "startDate": 1606132436,
        "endDate": 1606132436
      },
      {
        "apyBucket": 10,
        "startDate": 1606133086,
        "endDate": 1606200691
      },
      {
        "apyBucket": 0,
        "startDate": 1606200695,
        "endDate": 1606201487
      },
      {
        "apyBucket": 10,
        "startDate": 1606201626,
        "endDate": 1606228087
      },
      {
        "apyBucket": 0,
        "startDate": 1606228382,
        "endDate": 1606251417
      },
      {
        "apyBucket": 10,
        "startDate": 1606251450,
        "endDate": 1606254107
      },
      {
        "apyBucket": 0,
        "startDate": 1606254209,
        "endDate": 1606343308
      },
      {
        "apyBucket": 10,
        "startDate": 1606343889,
        "endDate": 1606373781
      },
      {
        "apyBucket": 20,
        "startDate": 1606374144,
        "endDate": 1606374577
      },
      {
        "apyBucket": 10,
        "startDate": 1606374594,
        "endDate": 1606561862
      },
      {
        "apyBucket": 0,
        "startDate": 1606562351,
        "endDate": 1606715194
      },
      {
        "apyBucket": 10,
        "startDate": 1606715980,
        "endDate": 1606716595
      },
      {
        "apyBucket": 0,
        "startDate": 1606716727,
        "endDate": 1606723472
      },
      {
        "apyBucket": 10,
        "startDate": 1606724259,
        "endDate": 1606943136
      },
      {
        "apyBucket": 0,
        "startDate": 1606943492,
        "endDate": 1607117366
      },
      {
        "apyBucket": 10,
        "startDate": 1607117485,
        "endDate": 1607125947
      },
      {
        "apyBucket": 0,
        "startDate": 1607126208,
        "endDate": 1608258609
      },
      {
        "apyBucket": 10,
        "startDate": 1608258750,
        "endDate": 1608311835
      },
      {
        "apyBucket": 0,
        "startDate": 1608312350,
        "endDate": 1608333782
      },
      {
        "apyBucket": 10,
        "startDate": 1608335229,
        "endDate": 1608620352
      },
      {
        "apyBucket": 0,
        "startDate": 1608620665,
        "endDate": 1608663746
      },
      {
        "apyBucket": 10,
        "startDate": 1608664290,
        "endDate": 1608664331
      },
      {
        "apyBucket": 0,
        "startDate": 1608664959,
        "endDate": 1608680818
      },
      {
        "apyBucket": 10,
        "startDate": 1608682106,
        "endDate": 1608683298
      },
      {
        "apyBucket": 0,
        "startDate": 1608686117,
        "endDate": 1609216533
      },
      {
        "apyBucket": 10,
        "startDate": 1609216832,
        "endDate": 1609222716
      },
      {
        "apyBucket": 0,
        "startDate": 1609223193,
        "endDate": 1609295329
      },
      {
        "apyBucket": 10,
        "startDate": 1609295690,
        "endDate": 1609303595
      },
      {
        "apyBucket": 0,
        "startDate": 1609304081,
        "endDate": 1609340078
      },
      {
        "apyBucket": 10,
        "startDate": 1609340249,
        "endDate": 1609364735
      },
      {
        "apyBucket": 50,
        "startDate": 1609364754,
        "endDate": 1609367154
      },
      {
        "apyBucket": 30,
        "startDate": 1609367219,
        "endDate": 1609371019
      },
      {
        "apyBucket": 20,
        "startDate": 1609371421,
        "endDate": 1609374130
      },
      {
        "apyBucket": 10,
        "startDate": 1609374204,
        "endDate": 1609396709
      },
      {
        "apyBucket": 20,
        "startDate": 1609396730,
        "endDate": 1609397057
      },
      {
        "apyBucket": 10,
        "startDate": 1609397609,
        "endDate": 1609399708
      },
      {
        "apyBucket": 20,
        "startDate": 1609399799,
        "endDate": 1609400814
      },
      {
        "apyBucket": 10,
        "startDate": 1609403712,
        "endDate": 1609407662
      },
      {
        "apyBucket": 40,
        "startDate": 1609409042,
        "endDate": 1609412833
      },
      {
        "apyBucket": 10,
        "startDate": 1609413230,
        "endDate": 1609458341
      },
      {
        "apyBucket": 20,
        "startDate": 1609458556,
        "endDate": 1609460057
      },
      {
        "apyBucket": 10,
        "startDate": 1609460193,
        "endDate": 1609473289
      },
      {
        "apyBucket": 20,
        "startDate": 1609474975,
        "endDate": 1609475786
      },
      {
        "apyBucket": 30,
        "startDate": 1609476318,
        "endDate": 1609479166
      },
      {
        "apyBucket": 20,
        "startDate": 1609479399,
        "endDate": 1609482521
      },
      {
        "apyBucket": 10,
        "startDate": 1609483053,
        "endDate": 1609491585
      },
      {
        "apyBucket": 50,
        "startDate": 1609491680,
        "endDate": 1609492083
      },
      {
        "apyBucket": 60,
        "startDate": 1609492579,
        "endDate": 1609495381
      },
      {
        "apyBucket": 50,
        "startDate": 1609495465,
        "endDate": 1609499136
      },
      {
        "apyBucket": 20,
        "startDate": 1609499142,
        "endDate": 1609503794
      },
      {
        "apyBucket": 10,
        "startDate": 1609505147,
        "endDate": 1609574508
      },
      {
        "apyBucket": 20,
        "startDate": 1609575138,
        "endDate": 1609576928
      },
      {
        "apyBucket": 10,
        "startDate": 1609576928,
        "endDate": 1609591009
      },
      {
        "apyBucket": 20,
        "startDate": 1609591908,
        "endDate": 1609591908
      },
      {
        "apyBucket": 30,
        "startDate": 1609592088,
        "endDate": 1609596266
      },
      {
        "apyBucket": 40,
        "startDate": 1609596269,
        "endDate": 1609596297
      },
      {
        "apyBucket": 30,
        "startDate": 1609596842,
        "endDate": 1609599392
      },
      {
        "apyBucket": 10,
        "startDate": 1609600808,
        "endDate": 1609608253
      },
      {
        "apyBucket": 20,
        "startDate": 1609608998,
        "endDate": 1609609674
      },
      {
        "apyBucket": 10,
        "startDate": 1609609892,
        "endDate": 1609610158
      },
      {
        "apyBucket": 20,
        "startDate": 1609610209,
        "endDate": 1609612680
      },
      {
        "apyBucket": 30,
        "startDate": 1609612834,
        "endDate": 1609615444
      },
      {
        "apyBucket": 40,
        "startDate": 1609615730,
        "endDate": 1609619626
      },
      {
        "apyBucket": 30,
        "startDate": 1609619950,
        "endDate": 1609620338
      },
      {
        "apyBucket": 40,
        "startDate": 1609620400,
        "endDate": 1609620807
      },
      {
        "apyBucket": 20,
        "startDate": 1609620866,
        "endDate": 1609622768
      },
      {
        "apyBucket": 10,
        "startDate": 1609622969,
        "endDate": 1609623101
      },
      {
        "apyBucket": 20,
        "startDate": 1609623438,
        "endDate": 1609623438
      },
      {
        "apyBucket": 10,
        "startDate": 1609623848,
        "endDate": 1609626050
      },
      {
        "apyBucket": 20,
        "startDate": 1609626148,
        "endDate": 1609626426
      },
      {
        "apyBucket": 10,
        "startDate": 1609626801,
        "endDate": 1609626951
      },
      {
        "apyBucket": 20,
        "startDate": 1609627056,
        "endDate": 1609627953
      },
      {
        "apyBucket": 10,
        "startDate": 1609628702,
        "endDate": 1609628702
      },
      {
        "apyBucket": 20,
        "startDate": 1609629749,
        "endDate": 1609629791
      },
      {
        "apyBucket": 30,
        "startDate": 1609630293,
        "endDate": 1609631962
      },
      {
        "apyBucket": 20,
        "startDate": 1609632061,
        "endDate": 1609693330
      },
      {
        "apyBucket": 30,
        "startDate": 1609694572,
        "endDate": 1609694572
      },
      {
        "apyBucket": 0,
        "startDate": 1609694671,
        "endDate": 1609727323
      },
      {
        "apyBucket": 10,
        "startDate": 1609727512,
        "endDate": 1609767299
      },
      {
        "apyBucket": 40,
        "startDate": 1609767814,
        "endDate": 1609768076
      },
      {
        "apyBucket": 30,
        "startDate": 1609769111,
        "endDate": 1609771636
      },
      {
        "apyBucket": 20,
        "startDate": 1609772383,
        "endDate": 1609772623
      },
      {
        "apyBucket": 10,
        "startDate": 1609773283,
        "endDate": 1609773561
      },
      {
        "apyBucket": 20,
        "startDate": 1609774620,
        "endDate": 1609776242
      },
      {
        "apyBucket": 10,
        "startDate": 1609776864,
        "endDate": 1609813218
      },
      {
        "apyBucket": 30,
        "startDate": 1609813306,
        "endDate": 1609816907
      },
      {
        "apyBucket": 20,
        "startDate": 1609818068,
        "endDate": 1609824344
      },
      {
        "apyBucket": 10,
        "startDate": 1609824452,
        "endDate": 1609944829
      },
      {
        "apyBucket": 40,
        "startDate": 1609945343,
        "endDate": 1609952076
      },
      {
        "apyBucket": 20,
        "startDate": 1609953802,
        "endDate": 1609969467
      },
      {
        "apyBucket": 10,
        "startDate": 1609970098,
        "endDate": 1610029416
      },
      {
        "apyBucket": 70,
        "startDate": 1610029540,
        "endDate": 1610033132
      },
      {
        "apyBucket": 40,
        "startDate": 1610033132,
        "endDate": 1610036648
      },
      {
        "apyBucket": 10,
        "startDate": 1610038066,
        "endDate": 1610041995
      },
      {
        "apyBucket": 20,
        "startDate": 1610042299,
        "endDate": 1610042330
      },
      {
        "apyBucket": 10,
        "startDate": 1610042490,
        "endDate": 1610107163
      },
      {
        "apyBucket": 20,
        "startDate": 1610107926,
        "endDate": 1610108684
      },
      {
        "apyBucket": 10,
        "startDate": 1610109999,
        "endDate": 1610266919
      },
      {
        "apyBucket": 20,
        "startDate": 1610266970,
        "endDate": 1610275401
      },
      {
        "apyBucket": 10,
        "startDate": 1610275437,
        "endDate": 1610336526
      },
      {
        "apyBucket": 0,
        "startDate": 1610336607,
        "endDate": 1610352780
      },
      {
        "apyBucket": 10,
        "startDate": 1610354222,
        "endDate": 1610387760
      },
      {
        "apyBucket": 30,
        "startDate": 1610387768,
        "endDate": 1610398550
      },
      {
        "apyBucket": 20,
        "startDate": 1610398567,
        "endDate": 1610409232
      },
      {
        "apyBucket": 10,
        "startDate": 1610409395,
        "endDate": 1610417379
      },
      {
        "apyBucket": 0,
        "startDate": 1610417442,
        "endDate": 1610419549
      },
      {
        "apyBucket": 10,
        "startDate": 1610419614,
        "endDate": 1610564385
      },
      {
        "apyBucket": 30,
        "startDate": 1610564918,
        "endDate": 1610565025
      },
      {
        "apyBucket": 20,
        "startDate": 1610565921,
        "endDate": 1610568321
      },
      {
        "apyBucket": 10,
        "startDate": 1610568370,
        "endDate": 1610568982
      },
      {
        "apyBucket": 20,
        "startDate": 1610568982,
        "endDate": 1610570204
      },
      {
        "apyBucket": 10,
        "startDate": 1610570413,
        "endDate": 1610574905
      },
      {
        "apyBucket": 20,
        "startDate": 1610575142,
        "endDate": 1610582982
      },
      {
        "apyBucket": 10,
        "startDate": 1610583549,
        "endDate": 1610596594
      },
      {
        "apyBucket": 20,
        "startDate": 1610596882,
        "endDate": 1610598963
      },
      {
        "apyBucket": 30,
        "startDate": 1610599649,
        "endDate": 1610599649
      },
      {
        "apyBucket": 40,
        "startDate": 1610599649,
        "endDate": 1610600213
      },
      {
        "apyBucket": 30,
        "startDate": 1610600411,
        "endDate": 1610600411
      },
      {
        "apyBucket": 40,
        "startDate": 1610601027,
        "endDate": 1610601452
      },
      {
        "apyBucket": 50,
        "startDate": 1610602333,
        "endDate": 1610604489
      },
      {
        "apyBucket": 40,
        "startDate": 1610604498,
        "endDate": 1610604617
      },
      {
        "apyBucket": 10,
        "startDate": 1610604798,
        "endDate": 1610607380
      },
      {
        "apyBucket": 20,
        "startDate": 1610607686,
        "endDate": 1610620153
      },
      {
        "apyBucket": 30,
        "startDate": 1610621515,
        "endDate": 1610621690
      },
      {
        "apyBucket": 20,
        "startDate": 1610621949,
        "endDate": 1610624342
      },
      {
        "apyBucket": 10,
        "startDate": 1610624536,
        "endDate": 1610754775
      },
      {
        "apyBucket": 20,
        "startDate": 1610754875,
        "endDate": 1610761301
      },
      {
        "apyBucket": 10,
        "startDate": 1610761407,
        "endDate": 1611284629
      },
      {
        "apyBucket": 20,
        "startDate": 1611284782,
        "endDate": 1611289942
      },
      {
        "apyBucket": 10,
        "startDate": 1611290136,
        "endDate": 1611440419
      },
      {
        "apyBucket": 20,
        "startDate": 1611440508,
        "endDate": 1611456283
      },
      {
        "apyBucket": 10,
        "startDate": 1611457053,
        "endDate": 1611497351
      },
      {
        "apyBucket": 20,
        "startDate": 1611497475,
        "endDate": 1611499961
      },
      {
        "apyBucket": 10,
        "startDate": 1611500075,
        "endDate": 1611500075
      }
    ]
  },
  {
    "token": "ETH",
    "ratesOfBalances": [
      {
        "missingRate": 0.000002594849352291796,
        "tokensMissing": 1.1577871963236452e-7,
        "timeIdle": 93172
      },
      {
        "missingRate": 0,
        "tokensMissing": null,
        "timeIdle": 0
      },
      {
        "missingRate": 0.00009701787005321956,
        "tokensMissing": 3.600905487937539e-7,
        "timeIdle": 1686411
      },
      {
        "missingRate": 0.00004410056241675262,
        "tokensMissing": 6.852319686103878e-8,
        "timeIdle": 292711
      },
      {
        "missingRate": 0.000004549692554632182,
        "tokensMissing": 1.0725359614327523e-7,
        "timeIdle": 27383
      },
      {
        "missingRate": 0,
        "tokensMissing": null,
        "timeIdle": 0
      },
      {
        "missingRate": 0,
        "tokensMissing": null,
        "timeIdle": 0
      },
      {
        "missingRate": 0,
        "tokensMissing": null,
        "timeIdle": 0
      },
      {
        "missingRate": 0,
        "tokensMissing": null,
        "timeIdle": 0
      },
      {
        "missingRate": 0.000016071100726919328,
        "tokensMissing": 0.0000011069176565348116,
        "timeIdle": 260131
      },
      {
        "missingRate": 0,
        "tokensMissing": null,
        "timeIdle": 0
      },
      {
        "missingRate": 0.000005383907621985974,
        "tokensMissing": 2.2488986504975994e-7,
        "timeIdle": 87795
      },
      {
        "missingRate": 1.0529930614391967e-8,
        "tokensMissing": 4.078444318378338e-10,
        "timeIdle": 154
      },
      {
        "missingRate": 3.514534919627303e-8,
        "tokensMissing": 1.2985443900714877e-9,
        "timeIdle": 514
      },
      {
        "missingRate": 3.71661729918886e-7,
        "tokensMissing": 1.1974559982474986e-8,
        "timeIdle": 5613
      },
      {
        "missingRate": 0,
        "tokensMissing": null,
        "timeIdle": 0
      },
      {
        "missingRate": 0,
        "tokensMissing": null,
        "timeIdle": 0
      },
      {
        "missingRate": 3.034488542119134e-8,
        "tokensMissing": 6.554193937580166e-9,
        "timeIdle": 472
      },
      {
        "missingRate": 0,
        "tokensMissing": null,
        "timeIdle": 0
      },
      {
        "missingRate": 0.0000011492032993103405,
        "tokensMissing": 6.200606795375707e-8,
        "timeIdle": 19253
      },
      {
        "missingRate": 9.849241011932547e-8,
        "tokensMissing": 4.977746458079135e-9,
        "timeIdle": 1745
      },
      {
        "missingRate": 6.435236027524435e-9,
        "tokensMissing": 2.991985756373161e-10,
        "timeIdle": 114
      },
      {
        "missingRate": 0,
        "tokensMissing": null,
        "timeIdle": 0
      },
      {
        "missingRate": 0,
        "tokensMissing": null,
        "timeIdle": 0
      },
      {
        "missingRate": 0,
        "tokensMissing": null,
        "timeIdle": 0
      },
      {
        "missingRate": 3.505396306040347e-8,
        "tokensMissing": 2.509334441624933e-10,
        "timeIdle": 621
      },
      {
        "missingRate": 0,
        "tokensMissing": null,
        "timeIdle": 0
      },
      {
        "missingRate": 0.000025511676840380357,
        "tokensMissing": 5.831512918073878e-7,
        "timeIdle": 484898
      }
    ],
    "bucketChangesRates": [
      {
        "startDate": 1578505663,
        "apyBucket": 0,
        "endDate": 1592929001
      },
      {
        "apyBucket": 10,
        "startDate": 1592930039,
        "endDate": 1592934060
      },
      {
        "apyBucket": 0,
        "startDate": 1592934080,
        "endDate": 1592934080
      },
      {
        "apyBucket": 10,
        "startDate": 1592934183,
        "endDate": 1592935331
      },
      {
        "apyBucket": 0,
        "startDate": 1592935383,
        "endDate": 1592943868
      },
      {
        "apyBucket": 10,
        "startDate": 1592943952,
        "endDate": 1592953607
      },
      {
        "apyBucket": 0,
        "startDate": 1592953664,
        "endDate": 1599444332
      },
      {
        "apyBucket": 10,
        "startDate": 1599445158,
        "endDate": 1599525114
      },
      {
        "apyBucket": 0,
        "startDate": 1599525250,
        "endDate": 1599541018
      },
      {
        "apyBucket": 10,
        "startDate": 1599541059,
        "endDate": 1599541737
      },
      {
        "apyBucket": 0,
        "startDate": 1599541813,
        "endDate": 1599555217
      },
      {
        "apyBucket": 10,
        "startDate": 1599555943,
        "endDate": 1599557182
      },
      {
        "apyBucket": 0,
        "startDate": 1599557908,
        "endDate": 1599560153
      },
      {
        "apyBucket": 10,
        "startDate": 1599560352,
        "endDate": 1599563844
      },
      {
        "apyBucket": 0,
        "startDate": 1599563862,
        "endDate": 1599751259
      },
      {
        "apyBucket": 10,
        "startDate": 1599751266,
        "endDate": 1599831713
      },
      {
        "apyBucket": 0,
        "startDate": 1599832387,
        "endDate": 1599832387
      },
      {
        "apyBucket": 10,
        "startDate": 1599832459,
        "endDate": 1599836569
      },
      {
        "apyBucket": 0,
        "startDate": 1599836882,
        "endDate": 1599836981
      },
      {
        "apyBucket": 10,
        "startDate": 1599837104,
        "endDate": 1599838911
      },
      {
        "apyBucket": 0,
        "startDate": 1599839397,
        "endDate": 1599843837
      },
      {
        "apyBucket": 10,
        "startDate": 1599843955,
        "endDate": 1599944180
      },
      {
        "apyBucket": 0,
        "startDate": 1599944191,
        "endDate": 1599944191
      },
      {
        "apyBucket": 10,
        "startDate": 1599944191,
        "endDate": 1599944191
      },
      {
        "apyBucket": 0,
        "startDate": 1599944563,
        "endDate": 1611501041
      }
    ]
  },
  {
    "token": "sUSD",
    "ratesOfBalances": [
      {
        "missingRate": 0,
        "tokensMissing": null,
        "timeIdle": 0
      },
      {
        "missingRate": 0.001964647892901317,
        "tokensMissing": 0,
        "timeIdle": 484898
      }
    ],
    "bucketChangesRates": [
      {
        "startDate": 1578515435,
        "apyBucket": 0,
        "endDate": 1580487557
      },
      {
        "apyBucket": 10,
        "startDate": 1580494727,
        "endDate": 1580567569
      },
      {
        "apyBucket": 0,
        "startDate": 1580582998,
        "endDate": 1581029425
      },
      {
        "apyBucket": 10,
        "startDate": 1581032750,
        "endDate": 1581094272
      },
      {
        "apyBucket": 0,
        "startDate": 1581096498,
        "endDate": 1581137802
      },
      {
        "apyBucket": 20,
        "startDate": 1581143642,
        "endDate": 1581164949
      },
      {
        "apyBucket": 10,
        "startDate": 1581165386,
        "endDate": 1581232541
      },
      {
        "apyBucket": 0,
        "startDate": 1581237371,
        "endDate": 1581264691
      },
      {
        "apyBucket": 10,
        "startDate": 1581267551,
        "endDate": 1581326907
      },
      {
        "apyBucket": 20,
        "startDate": 1581329132,
        "endDate": 1581343780
      },
      {
        "apyBucket": 10,
        "startDate": 1581349473,
        "endDate": 1581378852
      },
      {
        "apyBucket": 20,
        "startDate": 1581390906,
        "endDate": 1581391478
      },
      {
        "apyBucket": 10,
        "startDate": 1581391773,
        "endDate": 1581480457
      },
      {
        "apyBucket": 20,
        "startDate": 1581480655,
        "endDate": 1581481719
      },
      {
        "apyBucket": 10,
        "startDate": 1581481840,
        "endDate": 1581497724
      },
      {
        "apyBucket": 20,
        "startDate": 1581498490,
        "endDate": 1581499662
      },
      {
        "apyBucket": 50,
        "startDate": 1581500224,
        "endDate": 1581511646
      },
      {
        "apyBucket": 40,
        "startDate": 1581511910,
        "endDate": 1581513233
      },
      {
        "apyBucket": 50,
        "startDate": 1581513785,
        "endDate": 1581521336
      },
      {
        "apyBucket": 20,
        "startDate": 1581521830,
        "endDate": 1581522070
      },
      {
        "apyBucket": 30,
        "startDate": 1581522278,
        "endDate": 1581525060
      },
      {
        "apyBucket": 0,
        "startDate": 1581526042,
        "endDate": 1581528174
      },
      {
        "apyBucket": 10,
        "startDate": 1581528641,
        "endDate": 1581537571
      },
      {
        "apyBucket": 20,
        "startDate": 1581538804,
        "endDate": 1581540083
      },
      {
        "apyBucket": 0,
        "startDate": 1581541473,
        "endDate": 1583885210
      },
      {
        "apyBucket": 50,
        "startDate": 1583894890,
        "endDate": 1583901429
      },
      {
        "apyBucket": 40,
        "startDate": 1583905198,
        "endDate": 1583905269
      },
      {
        "apyBucket": 30,
        "startDate": 1583905752,
        "endDate": 1583905752
      },
      {
        "apyBucket": 20,
        "startDate": 1583905912,
        "endDate": 1583913709
      },
      {
        "apyBucket": 10,
        "startDate": 1583913772,
        "endDate": 1583924112
      },
      {
        "apyBucket": 0,
        "startDate": 1583930096,
        "endDate": 1585289309
      },
      {
        "apyBucket": 40,
        "startDate": 1585289801,
        "endDate": 1585289801
      },
      {
        "apyBucket": 0,
        "startDate": 1585290998,
        "endDate": 1587632310
      },
      {
        "apyBucket": 20,
        "startDate": 1587634277,
        "endDate": 1587634765
      },
      {
        "apyBucket": 50,
        "startDate": 1587634878,
        "endDate": 1587636219
      },
      {
        "apyBucket": 40,
        "startDate": 1587637147,
        "endDate": 1587639202
      },
      {
        "apyBucket": 30,
        "startDate": 1587640220,
        "endDate": 1587641924
      },
      {
        "apyBucket": 20,
        "startDate": 1587642644,
        "endDate": 1587644881
      },
      {
        "apyBucket": 10,
        "startDate": 1587645118,
        "endDate": 1587645118
      },
      {
        "apyBucket": 0,
        "startDate": 1587645799,
        "endDate": 1587647725
      },
      {
        "apyBucket": 50,
        "startDate": 1587656093,
        "endDate": 1587659859
      },
      {
        "apyBucket": 40,
        "startDate": 1587659940,
        "endDate": 1587659940
      },
      {
        "apyBucket": 30,
        "startDate": 1587660953,
        "endDate": 1587660953
      },
      {
        "apyBucket": 40,
        "startDate": 1587662174,
        "endDate": 1587666412
      },
      {
        "apyBucket": 30,
        "startDate": 1587667738,
        "endDate": 1587686027
      },
      {
        "apyBucket": 20,
        "startDate": 1587686617,
        "endDate": 1587699125
      },
      {
        "apyBucket": 10,
        "startDate": 1587700464,
        "endDate": 1587700464
      },
      {
        "apyBucket": 50,
        "startDate": 1587701337,
        "endDate": 1587701337
      },
      {
        "apyBucket": 10,
        "startDate": 1587701375,
        "endDate": 1587701837
      },
      {
        "apyBucket": 50,
        "startDate": 1587708629,
        "endDate": 1587711065
      },
      {
        "apyBucket": 40,
        "startDate": 1587711356,
        "endDate": 1587719241
      },
      {
        "apyBucket": 50,
        "startDate": 1587719602,
        "endDate": 1587723830
      },
      {
        "apyBucket": 40,
        "startDate": 1587723971,
        "endDate": 1587728236
      },
      {
        "apyBucket": 50,
        "startDate": 1587728986,
        "endDate": 1587747323
      },
      {
        "apyBucket": 30,
        "startDate": 1587747880,
        "endDate": 1587747880
      },
      {
        "apyBucket": 50,
        "startDate": 1587747956,
        "endDate": 1587748025
      },
      {
        "apyBucket": 30,
        "startDate": 1587748272,
        "endDate": 1587748856
      },
      {
        "apyBucket": 50,
        "startDate": 1587748863,
        "endDate": 1587754521
      },
      {
        "apyBucket": 40,
        "startDate": 1587754735,
        "endDate": 1587762999
      },
      {
        "apyBucket": 30,
        "startDate": 1587764327,
        "endDate": 1587764386
      },
      {
        "apyBucket": 20,
        "startDate": 1587764836,
        "endDate": 1587790394
      },
      {
        "apyBucket": 40,
        "startDate": 1587792472,
        "endDate": 1587793495
      },
      {
        "apyBucket": 30,
        "startDate": 1587794059,
        "endDate": 1587794059
      },
      {
        "apyBucket": 50,
        "startDate": 1587794434,
        "endDate": 1587808090
      },
      {
        "apyBucket": 30,
        "startDate": 1587808561,
        "endDate": 1587809767
      },
      {
        "apyBucket": 50,
        "startDate": 1587809837,
        "endDate": 1587809938
      },
      {
        "apyBucket": 40,
        "startDate": 1587810411,
        "endDate": 1587811796
      },
      {
        "apyBucket": 50,
        "startDate": 1587812154,
        "endDate": 1587826664
      },
      {
        "apyBucket": 30,
        "startDate": 1587827551,
        "endDate": 1587827551
      },
      {
        "apyBucket": 50,
        "startDate": 1587828999,
        "endDate": 1587829881
      },
      {
        "apyBucket": 40,
        "startDate": 1587830346,
        "endDate": 1587831761
      },
      {
        "apyBucket": 30,
        "startDate": 1587832449,
        "endDate": 1587835916
      },
      {
        "apyBucket": 50,
        "startDate": 1587836205,
        "endDate": 1587846097
      },
      {
        "apyBucket": 40,
        "startDate": 1587846498,
        "endDate": 1587846900
      },
      {
        "apyBucket": 30,
        "startDate": 1587848093,
        "endDate": 1587849887
      },
      {
        "apyBucket": 40,
        "startDate": 1587852437,
        "endDate": 1587852437
      },
      {
        "apyBucket": 50,
        "startDate": 1587852546,
        "endDate": 1587852829
      },
      {
        "apyBucket": 20,
        "startDate": 1587853329,
        "endDate": 1587853329
      },
      {
        "apyBucket": 50,
        "startDate": 1587853647,
        "endDate": 1587858305
      },
      {
        "apyBucket": 40,
        "startDate": 1587858720,
        "endDate": 1587859951
      },
      {
        "apyBucket": 50,
        "startDate": 1587860717,
        "endDate": 1587868273
      },
      {
        "apyBucket": 40,
        "startDate": 1587868815,
        "endDate": 1587873556
      },
      {
        "apyBucket": 10,
        "startDate": 1587873797,
        "endDate": 1587874247
      },
      {
        "apyBucket": 40,
        "startDate": 1587874277,
        "endDate": 1587875652
      },
      {
        "apyBucket": 20,
        "startDate": 1587877803,
        "endDate": 1587877803
      },
      {
        "apyBucket": 30,
        "startDate": 1587878256,
        "endDate": 1587895676
      },
      {
        "apyBucket": 40,
        "startDate": 1587897793,
        "endDate": 1587899480
      },
      {
        "apyBucket": 30,
        "startDate": 1587899718,
        "endDate": 1587900304
      },
      {
        "apyBucket": 20,
        "startDate": 1587900779,
        "endDate": 1587907467
      },
      {
        "apyBucket": 30,
        "startDate": 1587908790,
        "endDate": 1587925877
      },
      {
        "apyBucket": 20,
        "startDate": 1587926009,
        "endDate": 1587933907
      },
      {
        "apyBucket": 30,
        "startDate": 1587935097,
        "endDate": 1587935097
      },
      {
        "apyBucket": 20,
        "startDate": 1587935269,
        "endDate": 1587935331
      },
      {
        "apyBucket": 30,
        "startDate": 1587935628,
        "endDate": 1587937027
      },
      {
        "apyBucket": 20,
        "startDate": 1587938678,
        "endDate": 1587940533
      },
      {
        "apyBucket": 30,
        "startDate": 1587940710,
        "endDate": 1587947789
      },
      {
        "apyBucket": 20,
        "startDate": 1587958451,
        "endDate": 1587973088
      },
      {
        "apyBucket": 30,
        "startDate": 1587975028,
        "endDate": 1587978981
      },
      {
        "apyBucket": 20,
        "startDate": 1587978983,
        "endDate": 1587978983
      },
      {
        "apyBucket": 40,
        "startDate": 1587980521,
        "endDate": 1587984011
      },
      {
        "apyBucket": 30,
        "startDate": 1587984923,
        "endDate": 1587994928
      },
      {
        "apyBucket": 20,
        "startDate": 1587998579,
        "endDate": 1587999379
      },
      {
        "apyBucket": 30,
        "startDate": 1587999573,
        "endDate": 1587999573
      },
      {
        "apyBucket": 20,
        "startDate": 1588000270,
        "endDate": 1588002438
      },
      {
        "apyBucket": 10,
        "startDate": 1588005559,
        "endDate": 1588009993
      },
      {
        "apyBucket": 20,
        "startDate": 1588013298,
        "endDate": 1588017777
      },
      {
        "apyBucket": 30,
        "startDate": 1588018464,
        "endDate": 1588018464
      },
      {
        "apyBucket": 40,
        "startDate": 1588020996,
        "endDate": 1588020996
      },
      {
        "apyBucket": 30,
        "startDate": 1588021069,
        "endDate": 1588035413
      },
      {
        "apyBucket": 20,
        "startDate": 1588037362,
        "endDate": 1588037748
      },
      {
        "apyBucket": 30,
        "startDate": 1588038381,
        "endDate": 1588050708
      },
      {
        "apyBucket": 20,
        "startDate": 1588054916,
        "endDate": 1588066012
      },
      {
        "apyBucket": 30,
        "startDate": 1588066169,
        "endDate": 1588066436
      },
      {
        "apyBucket": 20,
        "startDate": 1588068609,
        "endDate": 1588086357
      },
      {
        "apyBucket": 0,
        "startDate": 1588086456,
        "endDate": 1588087438
      },
      {
        "apyBucket": 20,
        "startDate": 1588087848,
        "endDate": 1588153907
      },
      {
        "apyBucket": 30,
        "startDate": 1588157476,
        "endDate": 1588196991
      },
      {
        "apyBucket": 20,
        "startDate": 1588197438,
        "endDate": 1588205172
      },
      {
        "apyBucket": 30,
        "startDate": 1588205721,
        "endDate": 1588205721
      },
      {
        "apyBucket": 20,
        "startDate": 1588207719,
        "endDate": 1588210026
      },
      {
        "apyBucket": 30,
        "startDate": 1588210535,
        "endDate": 1588234638
      },
      {
        "apyBucket": 20,
        "startDate": 1588237975,
        "endDate": 1588244751
      },
      {
        "apyBucket": 30,
        "startDate": 1588245966,
        "endDate": 1588245966
      },
      {
        "apyBucket": 20,
        "startDate": 1588246178,
        "endDate": 1588249421
      },
      {
        "apyBucket": 10,
        "startDate": 1588250677,
        "endDate": 1588256767
      },
      {
        "apyBucket": 0,
        "startDate": 1588266368,
        "endDate": 1588266368
      },
      {
        "apyBucket": 10,
        "startDate": 1588267231,
        "endDate": 1588274347
      },
      {
        "apyBucket": 0,
        "startDate": 1588278466,
        "endDate": 1588287850
      },
      {
        "apyBucket": 10,
        "startDate": 1588288524,
        "endDate": 1588298362
      },
      {
        "apyBucket": 20,
        "startDate": 1588298728,
        "endDate": 1588316425
      },
      {
        "apyBucket": 10,
        "startDate": 1588316914,
        "endDate": 1588337693
      },
      {
        "apyBucket": 20,
        "startDate": 1588339369,
        "endDate": 1588339369
      },
      {
        "apyBucket": 10,
        "startDate": 1588339505,
        "endDate": 1588364478
      },
      {
        "apyBucket": 20,
        "startDate": 1588365006,
        "endDate": 1588366939
      },
      {
        "apyBucket": 10,
        "startDate": 1588366974,
        "endDate": 1588367539
      },
      {
        "apyBucket": 20,
        "startDate": 1588367771,
        "endDate": 1588386893
      },
      {
        "apyBucket": 50,
        "startDate": 1588387880,
        "endDate": 1588387880
      },
      {
        "apyBucket": 20,
        "startDate": 1588388275,
        "endDate": 1588397606
      },
      {
        "apyBucket": 10,
        "startDate": 1588397665,
        "endDate": 1588433012
      },
      {
        "apyBucket": 20,
        "startDate": 1588435608,
        "endDate": 1588464976
      },
      {
        "apyBucket": 10,
        "startDate": 1588469449,
        "endDate": 1588619652
      },
      {
        "apyBucket": 20,
        "startDate": 1588621126,
        "endDate": 1588624996
      },
      {
        "apyBucket": 10,
        "startDate": 1588626557,
        "endDate": 1588765208
      },
      {
        "apyBucket": 20,
        "startDate": 1588767927,
        "endDate": 1588776909
      },
      {
        "apyBucket": 10,
        "startDate": 1588782003,
        "endDate": 1588784655
      },
      {
        "apyBucket": 20,
        "startDate": 1588784700,
        "endDate": 1588787805
      },
      {
        "apyBucket": 10,
        "startDate": 1588788177,
        "endDate": 1588909413
      },
      {
        "apyBucket": 0,
        "startDate": 1588913559,
        "endDate": 1588913559
      },
      {
        "apyBucket": 10,
        "startDate": 1588914698,
        "endDate": 1588914698
      },
      {
        "apyBucket": 0,
        "startDate": 1588916531,
        "endDate": 1589242196
      },
      {
        "apyBucket": 50,
        "startDate": 1589242645,
        "endDate": 1589281937
      },
      {
        "apyBucket": 40,
        "startDate": 1589282232,
        "endDate": 1589292265
      },
      {
        "apyBucket": 30,
        "startDate": 1589292579,
        "endDate": 1589301455
      },
      {
        "apyBucket": 20,
        "startDate": 1589302348,
        "endDate": 1589304529
      },
      {
        "apyBucket": 0,
        "startDate": 1589304971,
        "endDate": 1589324132
      },
      {
        "apyBucket": 50,
        "startDate": 1589327132,
        "endDate": 1589337700
      },
      {
        "apyBucket": 40,
        "startDate": 1589341476,
        "endDate": 1589358173
      },
      {
        "apyBucket": 20,
        "startDate": 1589358806,
        "endDate": 1589362544
      },
      {
        "apyBucket": 0,
        "startDate": 1589362990,
        "endDate": 1589447015
      },
      {
        "apyBucket": 10,
        "startDate": 1589449037,
        "endDate": 1589482976
      },
      {
        "apyBucket": 0,
        "startDate": 1589483089,
        "endDate": 1589801756
      },
      {
        "apyBucket": 10,
        "startDate": 1589812260,
        "endDate": 1589829058
      },
      {
        "apyBucket": 0,
        "startDate": 1589829182,
        "endDate": 1589889331
      },
      {
        "apyBucket": 10,
        "startDate": 1589889458,
        "endDate": 1589919149
      },
      {
        "apyBucket": 0,
        "startDate": 1589920658,
        "endDate": 1589956685
      },
      {
        "apyBucket": 10,
        "startDate": 1589967838,
        "endDate": 1589985268
      },
      {
        "apyBucket": 0,
        "startDate": 1589987053,
        "endDate": 1590202746
      },
      {
        "apyBucket": 10,
        "startDate": 1590203215,
        "endDate": 1590204813
      },
      {
        "apyBucket": 0,
        "startDate": 1590205211,
        "endDate": 1590205211
      },
      {
        "apyBucket": 10,
        "startDate": 1590205460,
        "endDate": 1590306423
      },
      {
        "apyBucket": 0,
        "startDate": 1590309677,
        "endDate": 1590599182
      },
      {
        "apyBucket": 40,
        "startDate": 1590600353,
        "endDate": 1590600353
      },
      {
        "apyBucket": 30,
        "startDate": 1590601139,
        "endDate": 1590602722
      },
      {
        "apyBucket": 0,
        "startDate": 1590603408,
        "endDate": 1590748952
      },
      {
        "apyBucket": 20,
        "startDate": 1590751345,
        "endDate": 1590770127
      },
      {
        "apyBucket": 10,
        "startDate": 1590771507,
        "endDate": 1590783795
      },
      {
        "apyBucket": 0,
        "startDate": 1590783892,
        "endDate": 1590783892
      },
      {
        "apyBucket": 10,
        "startDate": 1590784514,
        "endDate": 1590797760
      },
      {
        "apyBucket": 20,
        "startDate": 1590803068,
        "endDate": 1590803942
      },
      {
        "apyBucket": 10,
        "startDate": 1590819524,
        "endDate": 1590840943
      },
      {
        "apyBucket": 0,
        "startDate": 1590841108,
        "endDate": 1590844715
      },
      {
        "apyBucket": 20,
        "startDate": 1590846335,
        "endDate": 1590853068
      },
      {
        "apyBucket": 10,
        "startDate": 1590854719,
        "endDate": 1590860655
      },
      {
        "apyBucket": 20,
        "startDate": 1590862238,
        "endDate": 1590863334
      },
      {
        "apyBucket": 0,
        "startDate": 1590863434,
        "endDate": 1591082605
      },
      {
        "apyBucket": 30,
        "startDate": 1591086439,
        "endDate": 1591098541
      },
      {
        "apyBucket": 10,
        "startDate": 1591101483,
        "endDate": 1591217926
      },
      {
        "apyBucket": 0,
        "startDate": 1591218375,
        "endDate": 1591234409
      },
      {
        "apyBucket": 10,
        "startDate": 1591235286,
        "endDate": 1591318917
      },
      {
        "apyBucket": 50,
        "startDate": 1591321672,
        "endDate": 1591321672
      },
      {
        "apyBucket": 10,
        "startDate": 1591322655,
        "endDate": 1591372482
      },
      {
        "apyBucket": 0,
        "startDate": 1591373808,
        "endDate": 1591411127
      },
      {
        "apyBucket": 10,
        "startDate": 1591418562,
        "endDate": 1591481283
      },
      {
        "apyBucket": 0,
        "startDate": 1591482794,
        "endDate": 1591880893
      },
      {
        "apyBucket": 40,
        "startDate": 1591886047,
        "endDate": 1591886047
      },
      {
        "apyBucket": 0,
        "startDate": 1591886485,
        "endDate": 1592040410
      },
      {
        "apyBucket": 10,
        "startDate": 1592043320,
        "endDate": 1592121175
      },
      {
        "apyBucket": 0,
        "startDate": 1592125440,
        "endDate": 1592153224
      },
      {
        "apyBucket": 10,
        "startDate": 1592158513,
        "endDate": 1592158513
      },
      {
        "apyBucket": 0,
        "startDate": 1592170014,
        "endDate": 1592234963
      },
      {
        "apyBucket": 10,
        "startDate": 1592239109,
        "endDate": 1592248536
      },
      {
        "apyBucket": 0,
        "startDate": 1592250712,
        "endDate": 1592339229
      },
      {
        "apyBucket": 20,
        "startDate": 1592342352,
        "endDate": 1592349645
      },
      {
        "apyBucket": 10,
        "startDate": 1592351028,
        "endDate": 1592362211
      },
      {
        "apyBucket": 0,
        "startDate": 1592363760,
        "endDate": 1592495510
      },
      {
        "apyBucket": 40,
        "startDate": 1592496368,
        "endDate": 1592499200
      },
      {
        "apyBucket": 30,
        "startDate": 1592500166,
        "endDate": 1592505375
      },
      {
        "apyBucket": 10,
        "startDate": 1592506553,
        "endDate": 1592506553
      },
      {
        "apyBucket": 0,
        "startDate": 1592510895,
        "endDate": 1592512439
      },
      {
        "apyBucket": 30,
        "startDate": 1592512555,
        "endDate": 1592514570
      },
      {
        "apyBucket": 10,
        "startDate": 1592515083,
        "endDate": 1592515083
      },
      {
        "apyBucket": 30,
        "startDate": 1592515243,
        "endDate": 1592515332
      },
      {
        "apyBucket": 20,
        "startDate": 1592515987,
        "endDate": 1592538225
      },
      {
        "apyBucket": 10,
        "startDate": 1592540033,
        "endDate": 1592540033
      },
      {
        "apyBucket": 20,
        "startDate": 1592541085,
        "endDate": 1592553927
      },
      {
        "apyBucket": 10,
        "startDate": 1592555129,
        "endDate": 1592562604
      },
      {
        "apyBucket": 20,
        "startDate": 1592565584,
        "endDate": 1592579601
      },
      {
        "apyBucket": 10,
        "startDate": 1592579948,
        "endDate": 1592583593
      },
      {
        "apyBucket": 20,
        "startDate": 1592584370,
        "endDate": 1592585958
      },
      {
        "apyBucket": 30,
        "startDate": 1592586297,
        "endDate": 1592592006
      },
      {
        "apyBucket": 0,
        "startDate": 1592592604,
        "endDate": 1592601152
      },
      {
        "apyBucket": 30,
        "startDate": 1592601275,
        "endDate": 1592601429
      },
      {
        "apyBucket": 10,
        "startDate": 1592601559,
        "endDate": 1592601764
      },
      {
        "apyBucket": 0,
        "startDate": 1592602596,
        "endDate": 1592628749
      },
      {
        "apyBucket": 30,
        "startDate": 1592629649,
        "endDate": 1592635568
      },
      {
        "apyBucket": 20,
        "startDate": 1592635610,
        "endDate": 1592654286
      },
      {
        "apyBucket": 10,
        "startDate": 1592654673,
        "endDate": 1592654673
      },
      {
        "apyBucket": 0,
        "startDate": 1592654880,
        "endDate": 1592660179
      },
      {
        "apyBucket": 10,
        "startDate": 1592661111,
        "endDate": 1592670698
      },
      {
        "apyBucket": 0,
        "startDate": 1592671374,
        "endDate": 1592673095
      },
      {
        "apyBucket": 10,
        "startDate": 1592674264,
        "endDate": 1592674685
      },
      {
        "apyBucket": 0,
        "startDate": 1592675820,
        "endDate": 1592735716
      },
      {
        "apyBucket": 10,
        "startDate": 1592739110,
        "endDate": 1592755104
      },
      {
        "apyBucket": 20,
        "startDate": 1592755661,
        "endDate": 1592758698
      },
      {
        "apyBucket": 10,
        "startDate": 1592761493,
        "endDate": 1592783737
      },
      {
        "apyBucket": 50,
        "startDate": 1592784968,
        "endDate": 1592788875
      },
      {
        "apyBucket": 40,
        "startDate": 1592789368,
        "endDate": 1592789368
      },
      {
        "apyBucket": 50,
        "startDate": 1592789803,
        "endDate": 1592791896
      },
      {
        "apyBucket": 40,
        "startDate": 1592792171,
        "endDate": 1592792356
      },
      {
        "apyBucket": 50,
        "startDate": 1592792831,
        "endDate": 1592798022
      },
      {
        "apyBucket": 40,
        "startDate": 1592798370,
        "endDate": 1592808643
      },
      {
        "apyBucket": 30,
        "startDate": 1592808751,
        "endDate": 1592811591
      },
      {
        "apyBucket": 0,
        "startDate": 1592813456,
        "endDate": 1592830897
      },
      {
        "apyBucket": 20,
        "startDate": 1592834754,
        "endDate": 1592840687
      },
      {
        "apyBucket": 10,
        "startDate": 1592840997,
        "endDate": 1592849518
      },
      {
        "apyBucket": 0,
        "startDate": 1592849537,
        "endDate": 1592867546
      },
      {
        "apyBucket": 10,
        "startDate": 1592870607,
        "endDate": 1592955898
      },
      {
        "apyBucket": 0,
        "startDate": 1592956980,
        "endDate": 1593188308
      },
      {
        "apyBucket": 10,
        "startDate": 1593191401,
        "endDate": 1593191401
      },
      {
        "apyBucket": 0,
        "startDate": 1593191829,
        "endDate": 1593552291
      },
      {
        "apyBucket": 40,
        "startDate": 1593558175,
        "endDate": 1593566983
      },
      {
        "apyBucket": 20,
        "startDate": 1593567362,
        "endDate": 1593583809
      },
      {
        "apyBucket": 10,
        "startDate": 1593584056,
        "endDate": 1593599375
      },
      {
        "apyBucket": 40,
        "startDate": 1593608739,
        "endDate": 1593626045
      },
      {
        "apyBucket": 30,
        "startDate": 1593626076,
        "endDate": 1593632255
      },
      {
        "apyBucket": 10,
        "startDate": 1593632282,
        "endDate": 1593639614
      },
      {
        "apyBucket": 20,
        "startDate": 1593640009,
        "endDate": 1593646033
      },
      {
        "apyBucket": 10,
        "startDate": 1593646405,
        "endDate": 1593646405
      },
      {
        "apyBucket": 0,
        "startDate": 1593646432,
        "endDate": 1593747165
      },
      {
        "apyBucket": 50,
        "startDate": 1593760017,
        "endDate": 1593765443
      },
      {
        "apyBucket": 40,
        "startDate": 1593766134,
        "endDate": 1593768697
      },
      {
        "apyBucket": 30,
        "startDate": 1593771592,
        "endDate": 1593786985
      },
      {
        "apyBucket": 0,
        "startDate": 1593789229,
        "endDate": 1593872411
      },
      {
        "apyBucket": 10,
        "startDate": 1593875200,
        "endDate": 1593916390
      },
      {
        "apyBucket": 0,
        "startDate": 1593924765,
        "endDate": 1593936252
      },
      {
        "apyBucket": 10,
        "startDate": 1593940976,
        "endDate": 1593969894
      },
      {
        "apyBucket": 0,
        "startDate": 1593970099,
        "endDate": 1593971371
      },
      {
        "apyBucket": 10,
        "startDate": 1593973723,
        "endDate": 1594029962
      },
      {
        "apyBucket": 0,
        "startDate": 1594035197,
        "endDate": 1594040415
      },
      {
        "apyBucket": 20,
        "startDate": 1594045018,
        "endDate": 1594048014
      },
      {
        "apyBucket": 10,
        "startDate": 1594049226,
        "endDate": 1594144550
      },
      {
        "apyBucket": 0,
        "startDate": 1594145937,
        "endDate": 1594208142
      },
      {
        "apyBucket": 40,
        "startDate": 1594209403,
        "endDate": 1594209537
      },
      {
        "apyBucket": 20,
        "startDate": 1594214070,
        "endDate": 1594214070
      },
      {
        "apyBucket": 0,
        "startDate": 1594214176,
        "endDate": 1594229551
      },
      {
        "apyBucket": 10,
        "startDate": 1594230229,
        "endDate": 1594230229
      },
      {
        "apyBucket": 0,
        "startDate": 1594230657,
        "endDate": 1594256975
      },
      {
        "apyBucket": 10,
        "startDate": 1594258189,
        "endDate": 1594258189
      },
      {
        "apyBucket": 0,
        "startDate": 1594260292,
        "endDate": 1594275677
      },
      {
        "apyBucket": 10,
        "startDate": 1594282901,
        "endDate": 1594292016
      },
      {
        "apyBucket": 40,
        "startDate": 1594294824,
        "endDate": 1594296451
      },
      {
        "apyBucket": 0,
        "startDate": 1594298926,
        "endDate": 1594320899
      },
      {
        "apyBucket": 10,
        "startDate": 1594320906,
        "endDate": 1594320906
      },
      {
        "apyBucket": 0,
        "startDate": 1594321931,
        "endDate": 1594799115
      },
      {
        "apyBucket": 20,
        "startDate": 1594800602,
        "endDate": 1594800602
      },
      {
        "apyBucket": 10,
        "startDate": 1594802157,
        "endDate": 1594802157
      },
      {
        "apyBucket": 20,
        "startDate": 1594802157,
        "endDate": 1594802157
      },
      {
        "apyBucket": 10,
        "startDate": 1594810475,
        "endDate": 1594859108
      },
      {
        "apyBucket": 20,
        "startDate": 1594865118,
        "endDate": 1594881306
      },
      {
        "apyBucket": 10,
        "startDate": 1594882782,
        "endDate": 1594902882
      },
      {
        "apyBucket": 0,
        "startDate": 1594905131,
        "endDate": 1595108936
      },
      {
        "apyBucket": 10,
        "startDate": 1595109488,
        "endDate": 1595109488
      },
      {
        "apyBucket": 0,
        "startDate": 1595111824,
        "endDate": 1595639090
      },
      {
        "apyBucket": 10,
        "startDate": 1595640054,
        "endDate": 1595791685
      },
      {
        "apyBucket": 0,
        "startDate": 1595792524,
        "endDate": 1596027401
      },
      {
        "apyBucket": 10,
        "startDate": 1596039154,
        "endDate": 1596039154
      },
      {
        "apyBucket": 0,
        "startDate": 1596041128,
        "endDate": 1596440334
      },
      {
        "apyBucket": 20,
        "startDate": 1596447686,
        "endDate": 1596447686
      },
      {
        "apyBucket": 0,
        "startDate": 1596448683,
        "endDate": 1596872474
      },
      {
        "apyBucket": 10,
        "startDate": 1596908195,
        "endDate": 1596995044
      },
      {
        "apyBucket": 0,
        "startDate": 1597003704,
        "endDate": 1597065770
      },
      {
        "apyBucket": 10,
        "startDate": 1597073657,
        "endDate": 1597087533
      },
      {
        "apyBucket": 0,
        "startDate": 1597088597,
        "endDate": 1597168197
      },
      {
        "apyBucket": 10,
        "startDate": 1597170252,
        "endDate": 1597183948
      },
      {
        "apyBucket": 0,
        "startDate": 1597184534,
        "endDate": 1597189747
      },
      {
        "apyBucket": 10,
        "startDate": 1597192163,
        "endDate": 1597203358
      },
      {
        "apyBucket": 50,
        "startDate": 1597226788,
        "endDate": 1597238077
      },
      {
        "apyBucket": 30,
        "startDate": 1597239881,
        "endDate": 1597250187
      },
      {
        "apyBucket": 20,
        "startDate": 1597254223,
        "endDate": 1597265937
      },
      {
        "apyBucket": 30,
        "startDate": 1597265971,
        "endDate": 1597270142
      },
      {
        "apyBucket": 10,
        "startDate": 1597282095,
        "endDate": 1597282095
      },
      {
        "apyBucket": 20,
        "startDate": 1597284960,
        "endDate": 1597286465
      },
      {
        "apyBucket": 30,
        "startDate": 1597286684,
        "endDate": 1597300422
      },
      {
        "apyBucket": 20,
        "startDate": 1597301444,
        "endDate": 1597311975
      },
      {
        "apyBucket": 10,
        "startDate": 1597324508,
        "endDate": 1597324664
      },
      {
        "apyBucket": 50,
        "startDate": 1597324797,
        "endDate": 1597324797
      },
      {
        "apyBucket": 10,
        "startDate": 1597325173,
        "endDate": 1597329337
      },
      {
        "apyBucket": 40,
        "startDate": 1597334460,
        "endDate": 1597334460
      },
      {
        "apyBucket": 30,
        "startDate": 1597334819,
        "endDate": 1597334819
      },
      {
        "apyBucket": 20,
        "startDate": 1597335144,
        "endDate": 1597340131
      },
      {
        "apyBucket": 50,
        "startDate": 1597340255,
        "endDate": 1597341761
      },
      {
        "apyBucket": 10,
        "startDate": 1597344713,
        "endDate": 1597346130
      },
      {
        "apyBucket": 20,
        "startDate": 1597347112,
        "endDate": 1597350262
      },
      {
        "apyBucket": 10,
        "startDate": 1597351004,
        "endDate": 1597351296
      },
      {
        "apyBucket": 20,
        "startDate": 1597354614,
        "endDate": 1597354614
      },
      {
        "apyBucket": 10,
        "startDate": 1597355545,
        "endDate": 1597355545
      },
      {
        "apyBucket": 20,
        "startDate": 1597362702,
        "endDate": 1597362928
      },
      {
        "apyBucket": 50,
        "startDate": 1597364034,
        "endDate": 1597365371
      },
      {
        "apyBucket": 40,
        "startDate": 1597365506,
        "endDate": 1597365506
      },
      {
        "apyBucket": 50,
        "startDate": 1597366072,
        "endDate": 1597368936
      },
      {
        "apyBucket": 30,
        "startDate": 1597369171,
        "endDate": 1597369171
      },
      {
        "apyBucket": 20,
        "startDate": 1597370834,
        "endDate": 1597370834
      },
      {
        "apyBucket": 30,
        "startDate": 1597371298,
        "endDate": 1597371298
      },
      {
        "apyBucket": 20,
        "startDate": 1597371832,
        "endDate": 1597385336
      },
      {
        "apyBucket": 0,
        "startDate": 1597390316,
        "endDate": 1597438768
      },
      {
        "apyBucket": 10,
        "startDate": 1597440002,
        "endDate": 1597440002
      },
      {
        "apyBucket": 0,
        "startDate": 1597443102,
        "endDate": 1597443102
      },
      {
        "apyBucket": 10,
        "startDate": 1597451060,
        "endDate": 1597452753
      },
      {
        "apyBucket": 40,
        "startDate": 1597454053,
        "endDate": 1597459086
      },
      {
        "apyBucket": 30,
        "startDate": 1597459108,
        "endDate": 1597476444
      },
      {
        "apyBucket": 20,
        "startDate": 1597478028,
        "endDate": 1597495364
      },
      {
        "apyBucket": 10,
        "startDate": 1597497878,
        "endDate": 1597497878
      },
      {
        "apyBucket": 30,
        "startDate": 1597508672,
        "endDate": 1597508672
      },
      {
        "apyBucket": 20,
        "startDate": 1597508889,
        "endDate": 1597508889
      },
      {
        "apyBucket": 10,
        "startDate": 1597511027,
        "endDate": 1597520991
      },
      {
        "apyBucket": 0,
        "startDate": 1597521718,
        "endDate": 1597748663
      },
      {
        "apyBucket": 20,
        "startDate": 1597749444,
        "endDate": 1597776164
      },
      {
        "apyBucket": 40,
        "startDate": 1597776765,
        "endDate": 1597776765
      },
      {
        "apyBucket": 30,
        "startDate": 1597777688,
        "endDate": 1597782084
      },
      {
        "apyBucket": 20,
        "startDate": 1597782291,
        "endDate": 1597782291
      },
      {
        "apyBucket": 30,
        "startDate": 1597785307,
        "endDate": 1597787913
      },
      {
        "apyBucket": 50,
        "startDate": 1597788302,
        "endDate": 1597788302
      },
      {
        "apyBucket": 40,
        "startDate": 1597788323,
        "endDate": 1597788590
      },
      {
        "apyBucket": 50,
        "startDate": 1597789542,
        "endDate": 1597789542
      },
      {
        "apyBucket": 30,
        "startDate": 1597790416,
        "endDate": 1597794996
      },
      {
        "apyBucket": 50,
        "startDate": 1597795437,
        "endDate": 1597795437
      },
      {
        "apyBucket": 30,
        "startDate": 1597795568,
        "endDate": 1597795568
      },
      {
        "apyBucket": 20,
        "startDate": 1597796014,
        "endDate": 1597796014
      },
      {
        "apyBucket": 30,
        "startDate": 1597796551,
        "endDate": 1597796551
      },
      {
        "apyBucket": 20,
        "startDate": 1597797177,
        "endDate": 1597801849
      },
      {
        "apyBucket": 30,
        "startDate": 1597804451,
        "endDate": 1597805608
      },
      {
        "apyBucket": 50,
        "startDate": 1597805850,
        "endDate": 1597811077
      },
      {
        "apyBucket": 40,
        "startDate": 1597813497,
        "endDate": 1597818096
      },
      {
        "apyBucket": 20,
        "startDate": 1597818153,
        "endDate": 1597818545
      },
      {
        "apyBucket": 40,
        "startDate": 1597818596,
        "endDate": 1597819108
      },
      {
        "apyBucket": 50,
        "startDate": 1597819117,
        "endDate": 1597819117
      },
      {
        "apyBucket": 40,
        "startDate": 1597822973,
        "endDate": 1597827420
      },
      {
        "apyBucket": 50,
        "startDate": 1597828486,
        "endDate": 1597830404
      },
      {
        "apyBucket": 20,
        "startDate": 1597830745,
        "endDate": 1597834372
      },
      {
        "apyBucket": 30,
        "startDate": 1597838955,
        "endDate": 1597838955
      },
      {
        "apyBucket": 50,
        "startDate": 1597839145,
        "endDate": 1597842401
      },
      {
        "apyBucket": 10,
        "startDate": 1597843929,
        "endDate": 1597856071
      },
      {
        "apyBucket": 20,
        "startDate": 1597856817,
        "endDate": 1597858682
      },
      {
        "apyBucket": 10,
        "startDate": 1597860193,
        "endDate": 1597860193
      },
      {
        "apyBucket": 20,
        "startDate": 1597862858,
        "endDate": 1597862858
      },
      {
        "apyBucket": 10,
        "startDate": 1597862882,
        "endDate": 1597862882
      },
      {
        "apyBucket": 0,
        "startDate": 1597863194,
        "endDate": 1597863419
      },
      {
        "apyBucket": 10,
        "startDate": 1597863915,
        "endDate": 1597865483
      },
      {
        "apyBucket": 0,
        "startDate": 1597865599,
        "endDate": 1597867813
      },
      {
        "apyBucket": 10,
        "startDate": 1597869075,
        "endDate": 1597871024
      },
      {
        "apyBucket": 0,
        "startDate": 1597873257,
        "endDate": 1597873264
      },
      {
        "apyBucket": 10,
        "startDate": 1597873624,
        "endDate": 1597873979
      },
      {
        "apyBucket": 20,
        "startDate": 1597874190,
        "endDate": 1597876020
      },
      {
        "apyBucket": 30,
        "startDate": 1597876699,
        "endDate": 1597877365
      },
      {
        "apyBucket": 40,
        "startDate": 1597877966,
        "endDate": 1597877966
      },
      {
        "apyBucket": 50,
        "startDate": 1597878284,
        "endDate": 1597878680
      },
      {
        "apyBucket": 20,
        "startDate": 1597879265,
        "endDate": 1597885169
      },
      {
        "apyBucket": 30,
        "startDate": 1597885443,
        "endDate": 1597886165
      },
      {
        "apyBucket": 10,
        "startDate": 1597886710,
        "endDate": 1597886710
      },
      {
        "apyBucket": 20,
        "startDate": 1597887146,
        "endDate": 1597887685
      },
      {
        "apyBucket": 30,
        "startDate": 1597888090,
        "endDate": 1597888090
      },
      {
        "apyBucket": 20,
        "startDate": 1597888594,
        "endDate": 1597889985
      },
      {
        "apyBucket": 30,
        "startDate": 1597890503,
        "endDate": 1597890503
      },
      {
        "apyBucket": 0,
        "startDate": 1597890787,
        "endDate": 1597903347
      },
      {
        "apyBucket": 10,
        "startDate": 1597906043,
        "endDate": 1597911639
      },
      {
        "apyBucket": 0,
        "startDate": 1597912944,
        "endDate": 1598618112
      },
      {
        "apyBucket": 30,
        "startDate": 1598619395,
        "endDate": 1598627268
      },
      {
        "apyBucket": 50,
        "startDate": 1598628503,
        "endDate": 1598628503
      },
      {
        "apyBucket": 30,
        "startDate": 1598629347,
        "endDate": 1598636872
      },
      {
        "apyBucket": 50,
        "startDate": 1598638246,
        "endDate": 1598638246
      },
      {
        "apyBucket": 40,
        "startDate": 1598638875,
        "endDate": 1598645640
      },
      {
        "apyBucket": 20,
        "startDate": 1598645756,
        "endDate": 1598648721
      },
      {
        "apyBucket": 50,
        "startDate": 1598649369,
        "endDate": 1598651262
      },
      {
        "apyBucket": 40,
        "startDate": 1598652187,
        "endDate": 1598652199
      },
      {
        "apyBucket": 30,
        "startDate": 1598652332,
        "endDate": 1598654218
      },
      {
        "apyBucket": 20,
        "startDate": 1598655194,
        "endDate": 1598669378
      },
      {
        "apyBucket": 40,
        "startDate": 1598670958,
        "endDate": 1598670958
      },
      {
        "apyBucket": 30,
        "startDate": 1598671572,
        "endDate": 1598671572
      },
      {
        "apyBucket": 50,
        "startDate": 1598672291,
        "endDate": 1598674223
      },
      {
        "apyBucket": 40,
        "startDate": 1598674890,
        "endDate": 1598692142
      },
      {
        "apyBucket": 30,
        "startDate": 1598692922,
        "endDate": 1598709180
      },
      {
        "apyBucket": 10,
        "startDate": 1598711793,
        "endDate": 1598714881
      },
      {
        "apyBucket": 0,
        "startDate": 1598719469,
        "endDate": 1598721286
      },
      {
        "apyBucket": 50,
        "startDate": 1598723581,
        "endDate": 1598728376
      },
      {
        "apyBucket": 20,
        "startDate": 1598729973,
        "endDate": 1598729973
      },
      {
        "apyBucket": 50,
        "startDate": 1598730048,
        "endDate": 1598744751
      },
      {
        "apyBucket": 40,
        "startDate": 1598745137,
        "endDate": 1598771523
      },
      {
        "apyBucket": 30,
        "startDate": 1598783571,
        "endDate": 1598811124
      },
      {
        "apyBucket": 50,
        "startDate": 1598811363,
        "endDate": 1598811363
      },
      {
        "apyBucket": 40,
        "startDate": 1598813333,
        "endDate": 1598815951
      },
      {
        "apyBucket": 30,
        "startDate": 1598816390,
        "endDate": 1598825561
      },
      {
        "apyBucket": 50,
        "startDate": 1598827660,
        "endDate": 1598832573
      },
      {
        "apyBucket": 40,
        "startDate": 1598834938,
        "endDate": 1598835229
      },
      {
        "apyBucket": 30,
        "startDate": 1598837102,
        "endDate": 1598846715
      },
      {
        "apyBucket": 40,
        "startDate": 1598846865,
        "endDate": 1598846865
      },
      {
        "apyBucket": 0,
        "startDate": 1598847547,
        "endDate": 1598847547
      },
      {
        "apyBucket": 40,
        "startDate": 1598848066,
        "endDate": 1598869887
      },
      {
        "apyBucket": 30,
        "startDate": 1598870016,
        "endDate": 1598870016
      },
      {
        "apyBucket": 20,
        "startDate": 1598872742,
        "endDate": 1598876207
      },
      {
        "apyBucket": 50,
        "startDate": 1598876218,
        "endDate": 1598884886
      },
      {
        "apyBucket": 40,
        "startDate": 1598887843,
        "endDate": 1598907380
      },
      {
        "apyBucket": 30,
        "startDate": 1598907732,
        "endDate": 1598907732
      },
      {
        "apyBucket": 50,
        "startDate": 1598908298,
        "endDate": 1598974430
      },
      {
        "apyBucket": 40,
        "startDate": 1598975013,
        "endDate": 1598975013
      },
      {
        "apyBucket": 30,
        "startDate": 1598975320,
        "endDate": 1598975320
      },
      {
        "apyBucket": 50,
        "startDate": 1598975983,
        "endDate": 1599005975
      },
      {
        "apyBucket": 0,
        "startDate": 1599008507,
        "endDate": 1599009794
      },
      {
        "apyBucket": 10,
        "startDate": 1599010954,
        "endDate": 1599010954
      },
      {
        "apyBucket": 20,
        "startDate": 1599012863,
        "endDate": 1599015305
      },
      {
        "apyBucket": 30,
        "startDate": 1599019326,
        "endDate": 1599019326
      },
      {
        "apyBucket": 50,
        "startDate": 1599019489,
        "endDate": 1599062746
      },
      {
        "apyBucket": 0,
        "startDate": 1599063440,
        "endDate": 1599073956
      },
      {
        "apyBucket": 10,
        "startDate": 1599075321,
        "endDate": 1599084275
      },
      {
        "apyBucket": 20,
        "startDate": 1599084446,
        "endDate": 1599093648
      },
      {
        "apyBucket": 10,
        "startDate": 1599095014,
        "endDate": 1599107394
      },
      {
        "apyBucket": 50,
        "startDate": 1599107596,
        "endDate": 1599109078
      },
      {
        "apyBucket": 40,
        "startDate": 1599109329,
        "endDate": 1599109329
      },
      {
        "apyBucket": 50,
        "startDate": 1599109909,
        "endDate": 1599118138
      },
      {
        "apyBucket": 30,
        "startDate": 1599119554,
        "endDate": 1599121777
      },
      {
        "apyBucket": 0,
        "startDate": 1599123341,
        "endDate": 1599123341
      },
      {
        "apyBucket": 50,
        "startDate": 1599130572,
        "endDate": 1599178271
      },
      {
        "apyBucket": 20,
        "startDate": 1599178651,
        "endDate": 1599195306
      },
      {
        "apyBucket": 10,
        "startDate": 1599200023,
        "endDate": 1599224223
      },
      {
        "apyBucket": 20,
        "startDate": 1599225196,
        "endDate": 1599225196
      },
      {
        "apyBucket": 10,
        "startDate": 1599234824,
        "endDate": 1599271207
      },
      {
        "apyBucket": 20,
        "startDate": 1599275285,
        "endDate": 1599275285
      },
      {
        "apyBucket": 10,
        "startDate": 1599275393,
        "endDate": 1599282557
      },
      {
        "apyBucket": 20,
        "startDate": 1599283360,
        "endDate": 1599298633
      },
      {
        "apyBucket": 50,
        "startDate": 1599313239,
        "endDate": 1599321526
      },
      {
        "apyBucket": 0,
        "startDate": 1599322463,
        "endDate": 1599322463
      },
      {
        "apyBucket": 50,
        "startDate": 1599322826,
        "endDate": 1599327262
      },
      {
        "apyBucket": 0,
        "startDate": 1599329841,
        "endDate": 1599358412
      },
      {
        "apyBucket": 10,
        "startDate": 1599362387,
        "endDate": 1599368016
      },
      {
        "apyBucket": 50,
        "startDate": 1599371759,
        "endDate": 1599371759
      },
      {
        "apyBucket": 30,
        "startDate": 1599372324,
        "endDate": 1599372324
      },
      {
        "apyBucket": 10,
        "startDate": 1599372830,
        "endDate": 1599394502
      },
      {
        "apyBucket": 0,
        "startDate": 1599397838,
        "endDate": 1599397838
      },
      {
        "apyBucket": 50,
        "startDate": 1599398607,
        "endDate": 1599446821
      },
      {
        "apyBucket": 40,
        "startDate": 1599449156,
        "endDate": 1599485998
      },
      {
        "apyBucket": 30,
        "startDate": 1599487453,
        "endDate": 1599512132
      },
      {
        "apyBucket": 10,
        "startDate": 1599514039,
        "endDate": 1599514039
      },
      {
        "apyBucket": 20,
        "startDate": 1599514994,
        "endDate": 1599516803
      },
      {
        "apyBucket": 40,
        "startDate": 1599518759,
        "endDate": 1599524656
      },
      {
        "apyBucket": 50,
        "startDate": 1599526020,
        "endDate": 1599530509
      },
      {
        "apyBucket": 40,
        "startDate": 1599530902,
        "endDate": 1599530902
      },
      {
        "apyBucket": 50,
        "startDate": 1599535984,
        "endDate": 1599558472
      },
      {
        "apyBucket": 40,
        "startDate": 1599565781,
        "endDate": 1599602352
      },
      {
        "apyBucket": 30,
        "startDate": 1599602454,
        "endDate": 1599606858
      },
      {
        "apyBucket": 20,
        "startDate": 1599607512,
        "endDate": 1599617052
      },
      {
        "apyBucket": 10,
        "startDate": 1599619796,
        "endDate": 1599626662
      },
      {
        "apyBucket": 0,
        "startDate": 1599631136,
        "endDate": 1599633649
      },
      {
        "apyBucket": 10,
        "startDate": 1599633955,
        "endDate": 1599643973
      },
      {
        "apyBucket": 50,
        "startDate": 1599644764,
        "endDate": 1599646087
      },
      {
        "apyBucket": 40,
        "startDate": 1599646438,
        "endDate": 1599647330
      },
      {
        "apyBucket": 50,
        "startDate": 1599649304,
        "endDate": 1599652578
      },
      {
        "apyBucket": 40,
        "startDate": 1599654891,
        "endDate": 1599657979
      },
      {
        "apyBucket": 20,
        "startDate": 1599658726,
        "endDate": 1599669864
      },
      {
        "apyBucket": 10,
        "startDate": 1599670464,
        "endDate": 1599678508
      },
      {
        "apyBucket": 0,
        "startDate": 1599679135,
        "endDate": 1599679135
      },
      {
        "apyBucket": 10,
        "startDate": 1599684777,
        "endDate": 1599684777
      },
      {
        "apyBucket": 0,
        "startDate": 1599684907,
        "endDate": 1599694252
      },
      {
        "apyBucket": 10,
        "startDate": 1599694347,
        "endDate": 1599707942
      },
      {
        "apyBucket": 40,
        "startDate": 1599710127,
        "endDate": 1599710127
      },
      {
        "apyBucket": 10,
        "startDate": 1599710292,
        "endDate": 1599727264
      },
      {
        "apyBucket": 50,
        "startDate": 1599729317,
        "endDate": 1599729317
      },
      {
        "apyBucket": 10,
        "startDate": 1599729525,
        "endDate": 1599730086
      },
      {
        "apyBucket": 20,
        "startDate": 1599733352,
        "endDate": 1599740134
      },
      {
        "apyBucket": 0,
        "startDate": 1599741372,
        "endDate": 1599837986
      },
      {
        "apyBucket": 10,
        "startDate": 1599844152,
        "endDate": 1599844152
      },
      {
        "apyBucket": 0,
        "startDate": 1599846288,
        "endDate": 1599849861
      },
      {
        "apyBucket": 40,
        "startDate": 1599856072,
        "endDate": 1599880877
      },
      {
        "apyBucket": 0,
        "startDate": 1599882158,
        "endDate": 1599887631
      },
      {
        "apyBucket": 10,
        "startDate": 1599890115,
        "endDate": 1599891821
      },
      {
        "apyBucket": 0,
        "startDate": 1599892088,
        "endDate": 1599909166
      },
      {
        "apyBucket": 40,
        "startDate": 1599912301,
        "endDate": 1599912301
      },
      {
        "apyBucket": 20,
        "startDate": 1599913297,
        "endDate": 1599948917
      },
      {
        "apyBucket": 50,
        "startDate": 1599953988,
        "endDate": 1599958265
      },
      {
        "apyBucket": 40,
        "startDate": 1599962739,
        "endDate": 1599967121
      },
      {
        "apyBucket": 0,
        "startDate": 1599970283,
        "endDate": 1600012476
      },
      {
        "apyBucket": 50,
        "startDate": 1600015130,
        "endDate": 1600015130
      },
      {
        "apyBucket": 0,
        "startDate": 1600015306,
        "endDate": 1600024249
      },
      {
        "apyBucket": 30,
        "startDate": 1600025684,
        "endDate": 1600045449
      },
      {
        "apyBucket": 10,
        "startDate": 1600046025,
        "endDate": 1600048558
      },
      {
        "apyBucket": 0,
        "startDate": 1600051823,
        "endDate": 1600051823
      },
      {
        "apyBucket": 10,
        "startDate": 1600053578,
        "endDate": 1600066177
      },
      {
        "apyBucket": 50,
        "startDate": 1600074275,
        "endDate": 1600074275
      },
      {
        "apyBucket": 10,
        "startDate": 1600076622,
        "endDate": 1600085914
      },
      {
        "apyBucket": 0,
        "startDate": 1600087960,
        "endDate": 1600145096
      },
      {
        "apyBucket": 30,
        "startDate": 1600145227,
        "endDate": 1600147454
      },
      {
        "apyBucket": 10,
        "startDate": 1600149929,
        "endDate": 1600157831
      },
      {
        "apyBucket": 30,
        "startDate": 1600167564,
        "endDate": 1600167564
      },
      {
        "apyBucket": 10,
        "startDate": 1600169197,
        "endDate": 1600199986
      },
      {
        "apyBucket": 30,
        "startDate": 1600200654,
        "endDate": 1600223067
      },
      {
        "apyBucket": 20,
        "startDate": 1600224841,
        "endDate": 1600224841
      },
      {
        "apyBucket": 0,
        "startDate": 1600225266,
        "endDate": 1600226611
      },
      {
        "apyBucket": 20,
        "startDate": 1600229646,
        "endDate": 1600229657
      },
      {
        "apyBucket": 40,
        "startDate": 1600231930,
        "endDate": 1600231930
      },
      {
        "apyBucket": 20,
        "startDate": 1600233916,
        "endDate": 1600233916
      },
      {
        "apyBucket": 0,
        "startDate": 1600233943,
        "endDate": 1600242428
      },
      {
        "apyBucket": 40,
        "startDate": 1600242898,
        "endDate": 1600242898
      },
      {
        "apyBucket": 10,
        "startDate": 1600245986,
        "endDate": 1600249055
      },
      {
        "apyBucket": 30,
        "startDate": 1600249214,
        "endDate": 1600255455
      },
      {
        "apyBucket": 40,
        "startDate": 1600258225,
        "endDate": 1600269319
      },
      {
        "apyBucket": 0,
        "startDate": 1600270329,
        "endDate": 1600639859
      },
      {
        "apyBucket": 10,
        "startDate": 1600651264,
        "endDate": 1600653011
      },
      {
        "apyBucket": 0,
        "startDate": 1600659271,
        "endDate": 1600659836
      },
      {
        "apyBucket": 10,
        "startDate": 1600675834,
        "endDate": 1600675834
      },
      {
        "apyBucket": 0,
        "startDate": 1600680536,
        "endDate": 1600690544
      },
      {
        "apyBucket": 10,
        "startDate": 1600694615,
        "endDate": 1600728065
      },
      {
        "apyBucket": 50,
        "startDate": 1600760509,
        "endDate": 1600773213
      },
      {
        "apyBucket": 30,
        "startDate": 1600774945,
        "endDate": 1600799896
      },
      {
        "apyBucket": 20,
        "startDate": 1600800974,
        "endDate": 1600804534
      },
      {
        "apyBucket": 10,
        "startDate": 1600809886,
        "endDate": 1600849041
      },
      {
        "apyBucket": 20,
        "startDate": 1600851763,
        "endDate": 1600859457
      },
      {
        "apyBucket": 40,
        "startDate": 1600861149,
        "endDate": 1600881205
      },
      {
        "apyBucket": 50,
        "startDate": 1600881839,
        "endDate": 1600881839
      },
      {
        "apyBucket": 40,
        "startDate": 1600882093,
        "endDate": 1600891054
      },
      {
        "apyBucket": 0,
        "startDate": 1600891074,
        "endDate": 1600898121
      },
      {
        "apyBucket": 30,
        "startDate": 1600898691,
        "endDate": 1600903616
      },
      {
        "apyBucket": 40,
        "startDate": 1600908012,
        "endDate": 1600908012
      },
      {
        "apyBucket": 50,
        "startDate": 1600908344,
        "endDate": 1600908344
      },
      {
        "apyBucket": 40,
        "startDate": 1600909060,
        "endDate": 1600945988
      },
      {
        "apyBucket": 30,
        "startDate": 1600947957,
        "endDate": 1600959134
      },
      {
        "apyBucket": 20,
        "startDate": 1600959960,
        "endDate": 1600997224
      },
      {
        "apyBucket": 10,
        "startDate": 1600999564,
        "endDate": 1601004727
      },
      {
        "apyBucket": 0,
        "startDate": 1601006282,
        "endDate": 1601086698
      },
      {
        "apyBucket": 10,
        "startDate": 1601086851,
        "endDate": 1601086851
      },
      {
        "apyBucket": 20,
        "startDate": 1601087615,
        "endDate": 1601106901
      },
      {
        "apyBucket": 0,
        "startDate": 1601106910,
        "endDate": 1601125042
      },
      {
        "apyBucket": 30,
        "startDate": 1601126267,
        "endDate": 1601129736
      },
      {
        "apyBucket": 20,
        "startDate": 1601131417,
        "endDate": 1601209370
      },
      {
        "apyBucket": 10,
        "startDate": 1601211047,
        "endDate": 1601211047
      },
      {
        "apyBucket": 20,
        "startDate": 1601211182,
        "endDate": 1601228182
      },
      {
        "apyBucket": 10,
        "startDate": 1601229959,
        "endDate": 1601376946
      },
      {
        "apyBucket": 0,
        "startDate": 1601377402,
        "endDate": 1601469700
      },
      {
        "apyBucket": 10,
        "startDate": 1601479898,
        "endDate": 1601540567
      },
      {
        "apyBucket": 0,
        "startDate": 1601545563,
        "endDate": 1601579516
      },
      {
        "apyBucket": 10,
        "startDate": 1601579693,
        "endDate": 1601635385
      },
      {
        "apyBucket": 0,
        "startDate": 1601636652,
        "endDate": 1601690451
      },
      {
        "apyBucket": 10,
        "startDate": 1601691443,
        "endDate": 1601699154
      },
      {
        "apyBucket": 0,
        "startDate": 1601702771,
        "endDate": 1602113051
      },
      {
        "apyBucket": 40,
        "startDate": 1602124278,
        "endDate": 1602124278
      },
      {
        "apyBucket": 30,
        "startDate": 1602126833,
        "endDate": 1602126833
      },
      {
        "apyBucket": 20,
        "startDate": 1602128333,
        "endDate": 1602149555
      },
      {
        "apyBucket": 30,
        "startDate": 1602151033,
        "endDate": 1602161416
      },
      {
        "apyBucket": 0,
        "startDate": 1602161620,
        "endDate": 1602166974
      },
      {
        "apyBucket": 40,
        "startDate": 1602173192,
        "endDate": 1602173192
      },
      {
        "apyBucket": 30,
        "startDate": 1602177654,
        "endDate": 1602211157
      },
      {
        "apyBucket": 20,
        "startDate": 1602211170,
        "endDate": 1602222933
      },
      {
        "apyBucket": 0,
        "startDate": 1602223553,
        "endDate": 1602296860
      },
      {
        "apyBucket": 50,
        "startDate": 1602298773,
        "endDate": 1602302317
      },
      {
        "apyBucket": 0,
        "startDate": 1602302900,
        "endDate": 1602419443
      },
      {
        "apyBucket": 10,
        "startDate": 1602420034,
        "endDate": 1602456988
      },
      {
        "apyBucket": 0,
        "startDate": 1602461981,
        "endDate": 1603074719
      },
      {
        "apyBucket": 50,
        "startDate": 1603078773,
        "endDate": 1603078773
      },
      {
        "apyBucket": 0,
        "startDate": 1603079907,
        "endDate": 1603172989
      },
      {
        "apyBucket": 10,
        "startDate": 1603174311,
        "endDate": 1603174311
      },
      {
        "apyBucket": 0,
        "startDate": 1603182985,
        "endDate": 1603220712
      },
      {
        "apyBucket": 10,
        "startDate": 1603221057,
        "endDate": 1603250084
      },
      {
        "apyBucket": 20,
        "startDate": 1603254727,
        "endDate": 1603254727
      },
      {
        "apyBucket": 10,
        "startDate": 1603255545,
        "endDate": 1603266103
      },
      {
        "apyBucket": 20,
        "startDate": 1603267175,
        "endDate": 1603278340
      },
      {
        "apyBucket": 30,
        "startDate": 1603280219,
        "endDate": 1603284497
      },
      {
        "apyBucket": 10,
        "startDate": 1603286455,
        "endDate": 1603373780
      },
      {
        "apyBucket": 0,
        "startDate": 1603388339,
        "endDate": 1603557660
      },
      {
        "apyBucket": 40,
        "startDate": 1603559198,
        "endDate": 1603559198
      },
      {
        "apyBucket": 0,
        "startDate": 1603560280,
        "endDate": 1603748974
      },
      {
        "apyBucket": 20,
        "startDate": 1603750402,
        "endDate": 1603758125
      },
      {
        "apyBucket": 0,
        "startDate": 1603758210,
        "endDate": 1603758887
      },
      {
        "apyBucket": 10,
        "startDate": 1603761866,
        "endDate": 1603805936
      },
      {
        "apyBucket": 0,
        "startDate": 1603806300,
        "endDate": 1603806300
      },
      {
        "apyBucket": 40,
        "startDate": 1603810315,
        "endDate": 1603812545
      },
      {
        "apyBucket": 0,
        "startDate": 1603814731,
        "endDate": 1603851278
      },
      {
        "apyBucket": 60,
        "startDate": 1603854499,
        "endDate": 1603854499
      },
      {
        "apyBucket": 0,
        "startDate": 1603856146,
        "endDate": 1603884717
      },
      {
        "apyBucket": 10,
        "startDate": 1603886865,
        "endDate": 1603886865
      },
      {
        "apyBucket": 20,
        "startDate": 1603887937,
        "endDate": 1603887937
      },
      {
        "apyBucket": 10,
        "startDate": 1603888170,
        "endDate": 1603910012
      },
      {
        "apyBucket": 20,
        "startDate": 1603913616,
        "endDate": 1603951753
      },
      {
        "apyBucket": 10,
        "startDate": 1603953806,
        "endDate": 1603956366
      },
      {
        "apyBucket": 0,
        "startDate": 1603957179,
        "endDate": 1604118592
      },
      {
        "apyBucket": 60,
        "startDate": 1604124958,
        "endDate": 1604126390
      },
      {
        "apyBucket": 20,
        "startDate": 1604128805,
        "endDate": 1604134924
      },
      {
        "apyBucket": 10,
        "startDate": 1604143020,
        "endDate": 1604216911
      },
      {
        "apyBucket": 20,
        "startDate": 1604217578,
        "endDate": 1604232196
      },
      {
        "apyBucket": 10,
        "startDate": 1604232447,
        "endDate": 1604286704
      },
      {
        "apyBucket": 30,
        "startDate": 1604288466,
        "endDate": 1604295336
      },
      {
        "apyBucket": 10,
        "startDate": 1604312327,
        "endDate": 1604328408
      },
      {
        "apyBucket": 0,
        "startDate": 1604330757,
        "endDate": 1604332637
      },
      {
        "apyBucket": 10,
        "startDate": 1604333123,
        "endDate": 1604333745
      },
      {
        "apyBucket": 20,
        "startDate": 1604337192,
        "endDate": 1604344128
      },
      {
        "apyBucket": 10,
        "startDate": 1604348483,
        "endDate": 1604365724
      },
      {
        "apyBucket": 0,
        "startDate": 1604366566,
        "endDate": 1604366566
      },
      {
        "apyBucket": 10,
        "startDate": 1604367652,
        "endDate": 1604367652
      },
      {
        "apyBucket": 0,
        "startDate": 1604368089,
        "endDate": 1604368089
      },
      {
        "apyBucket": 10,
        "startDate": 1604368282,
        "endDate": 1604369096
      },
      {
        "apyBucket": 0,
        "startDate": 1604369147,
        "endDate": 1604369147
      },
      {
        "apyBucket": 10,
        "startDate": 1604369959,
        "endDate": 1604369959
      },
      {
        "apyBucket": 0,
        "startDate": 1604370049,
        "endDate": 1604370191
      },
      {
        "apyBucket": 10,
        "startDate": 1604370424,
        "endDate": 1604370682
      },
      {
        "apyBucket": 0,
        "startDate": 1604376074,
        "endDate": 1604424222
      },
      {
        "apyBucket": 10,
        "startDate": 1604427369,
        "endDate": 1604427369
      },
      {
        "apyBucket": 0,
        "startDate": 1604429160,
        "endDate": 1604456292
      },
      {
        "apyBucket": 10,
        "startDate": 1604469061,
        "endDate": 1604520015
      },
      {
        "apyBucket": 0,
        "startDate": 1604522766,
        "endDate": 1604533027
      },
      {
        "apyBucket": 40,
        "startDate": 1604533785,
        "endDate": 1604539025
      },
      {
        "apyBucket": 30,
        "startDate": 1604539636,
        "endDate": 1604539636
      },
      {
        "apyBucket": 40,
        "startDate": 1604539966,
        "endDate": 1604539966
      },
      {
        "apyBucket": 30,
        "startDate": 1604540255,
        "endDate": 1604542261
      },
      {
        "apyBucket": 20,
        "startDate": 1604542956,
        "endDate": 1604542956
      },
      {
        "apyBucket": 10,
        "startDate": 1604543843,
        "endDate": 1604543843
      },
      {
        "apyBucket": 0,
        "startDate": 1604546445,
        "endDate": 1605449655
      },
      {
        "apyBucket": 10,
        "startDate": 1605457652,
        "endDate": 1605459588
      },
      {
        "apyBucket": 0,
        "startDate": 1605460447,
        "endDate": 1605638500
      },
      {
        "apyBucket": 30,
        "startDate": 1605638897,
        "endDate": 1605650906
      },
      {
        "apyBucket": 10,
        "startDate": 1605651975,
        "endDate": 1605673838
      },
      {
        "apyBucket": 30,
        "startDate": 1605675293,
        "endDate": 1605675293
      },
      {
        "apyBucket": 20,
        "startDate": 1605676190,
        "endDate": 1605676190
      },
      {
        "apyBucket": 10,
        "startDate": 1605677480,
        "endDate": 1605677480
      },
      {
        "apyBucket": 0,
        "startDate": 1605677498,
        "endDate": 1605682313
      },
      {
        "apyBucket": 10,
        "startDate": 1605689628,
        "endDate": 1605689628
      },
      {
        "apyBucket": 0,
        "startDate": 1605697855,
        "endDate": 1605900363
      },
      {
        "apyBucket": 10,
        "startDate": 1605900382,
        "endDate": 1605902031
      },
      {
        "apyBucket": 0,
        "startDate": 1605902143,
        "endDate": 1605991127
      },
      {
        "apyBucket": 20,
        "startDate": 1605991526,
        "endDate": 1606002671
      },
      {
        "apyBucket": 50,
        "startDate": 1606005265,
        "endDate": 1606007638
      },
      {
        "apyBucket": 40,
        "startDate": 1606007883,
        "endDate": 1606012163
      },
      {
        "apyBucket": 30,
        "startDate": 1606012756,
        "endDate": 1606012756
      },
      {
        "apyBucket": 10,
        "startDate": 1606014360,
        "endDate": 1606017337
      },
      {
        "apyBucket": 30,
        "startDate": 1606018132,
        "endDate": 1606018132
      },
      {
        "apyBucket": 10,
        "startDate": 1606018376,
        "endDate": 1606027988
      },
      {
        "apyBucket": 0,
        "startDate": 1606041252,
        "endDate": 1606135798
      },
      {
        "apyBucket": 10,
        "startDate": 1606136221,
        "endDate": 1606138293
      },
      {
        "apyBucket": 20,
        "startDate": 1606142918,
        "endDate": 1606150512
      },
      {
        "apyBucket": 10,
        "startDate": 1606154855,
        "endDate": 1606193740
      },
      {
        "apyBucket": 0,
        "startDate": 1606198709,
        "endDate": 1606337281
      },
      {
        "apyBucket": 30,
        "startDate": 1606340060,
        "endDate": 1606340060
      },
      {
        "apyBucket": 0,
        "startDate": 1606341147,
        "endDate": 1606392754
      },
      {
        "apyBucket": 50,
        "startDate": 1606401808,
        "endDate": 1606406342
      },
      {
        "apyBucket": 30,
        "startDate": 1606406342,
        "endDate": 1606406342
      },
      {
        "apyBucket": 0,
        "startDate": 1606408243,
        "endDate": 1606408595
      },
      {
        "apyBucket": 10,
        "startDate": 1606410938,
        "endDate": 1606410938
      },
      {
        "apyBucket": 20,
        "startDate": 1606413723,
        "endDate": 1606417754
      },
      {
        "apyBucket": 80,
        "startDate": 1606417873,
        "endDate": 1606417873
      },
      {
        "apyBucket": 60,
        "startDate": 1606419220,
        "endDate": 1606419220
      },
      {
        "apyBucket": 50,
        "startDate": 1606419663,
        "endDate": 1606419663
      },
      {
        "apyBucket": 30,
        "startDate": 1606420405,
        "endDate": 1606420405
      },
      {
        "apyBucket": 10,
        "startDate": 1606420935,
        "endDate": 1606421691
      },
      {
        "apyBucket": 0,
        "startDate": 1606423827,
        "endDate": 1606426463
      },
      {
        "apyBucket": 10,
        "startDate": 1606428540,
        "endDate": 1606428540
      },
      {
        "apyBucket": 0,
        "startDate": 1606428660,
        "endDate": 1606464260
      },
      {
        "apyBucket": 10,
        "startDate": 1606466973,
        "endDate": 1606472761
      },
      {
        "apyBucket": 30,
        "startDate": 1606475448,
        "endDate": 1606484595
      },
      {
        "apyBucket": 20,
        "startDate": 1606485815,
        "endDate": 1606487827
      },
      {
        "apyBucket": 30,
        "startDate": 1606488089,
        "endDate": 1606490911
      },
      {
        "apyBucket": 20,
        "startDate": 1606491366,
        "endDate": 1606512262
      },
      {
        "apyBucket": 10,
        "startDate": 1606512262,
        "endDate": 1606624432
      },
      {
        "apyBucket": 0,
        "startDate": 1606627889,
        "endDate": 1606693713
      },
      {
        "apyBucket": 10,
        "startDate": 1606693822,
        "endDate": 1606693822
      },
      {
        "apyBucket": 30,
        "startDate": 1606695786,
        "endDate": 1606702661
      },
      {
        "apyBucket": 0,
        "startDate": 1606703791,
        "endDate": 1606704111
      },
      {
        "apyBucket": 10,
        "startDate": 1606706432,
        "endDate": 1606706432
      },
      {
        "apyBucket": 20,
        "startDate": 1606706857,
        "endDate": 1606708764
      },
      {
        "apyBucket": 30,
        "startDate": 1606712483,
        "endDate": 1606712646
      },
      {
        "apyBucket": 40,
        "startDate": 1606712832,
        "endDate": 1606712832
      },
      {
        "apyBucket": 60,
        "startDate": 1606712973,
        "endDate": 1606713738
      },
      {
        "apyBucket": 40,
        "startDate": 1606714093,
        "endDate": 1606715913
      },
      {
        "apyBucket": 60,
        "startDate": 1606718268,
        "endDate": 1606718268
      },
      {
        "apyBucket": 70,
        "startDate": 1606718923,
        "endDate": 1606718928
      },
      {
        "apyBucket": 60,
        "startDate": 1606719326,
        "endDate": 1606720983
      },
      {
        "apyBucket": 70,
        "startDate": 1606721157,
        "endDate": 1606721201
      },
      {
        "apyBucket": 80,
        "startDate": 1606722082,
        "endDate": 1606725317
      },
      {
        "apyBucket": 90,
        "startDate": 1606725434,
        "endDate": 1606725434
      },
      {
        "apyBucket": 80,
        "startDate": 1606725526,
        "endDate": 1606728135
      },
      {
        "apyBucket": 90,
        "startDate": 1606728641,
        "endDate": 1606728942
      },
      {
        "apyBucket": 70,
        "startDate": 1606729299,
        "endDate": 1606729299
      },
      {
        "apyBucket": 80,
        "startDate": 1606730501,
        "endDate": 1606730501
      },
      {
        "apyBucket": 100,
        "startDate": 1606731342,
        "endDate": 1606735457
      },
      {
        "apyBucket": 110,
        "startDate": 1606735622,
        "endDate": 1606735622
      },
      {
        "apyBucket": 100,
        "startDate": 1606736094,
        "endDate": 1606736638
      },
      {
        "apyBucket": 110,
        "startDate": 1606740167,
        "endDate": 1606740167
      },
      {
        "apyBucket": 100,
        "startDate": 1606743716,
        "endDate": 1606746098
      },
      {
        "apyBucket": 80,
        "startDate": 1606746233,
        "endDate": 1606746324
      },
      {
        "apyBucket": 70,
        "startDate": 1606747179,
        "endDate": 1606747179
      },
      {
        "apyBucket": 50,
        "startDate": 1606747460,
        "endDate": 1606747460
      },
      {
        "apyBucket": 70,
        "startDate": 1606747564,
        "endDate": 1606751378
      },
      {
        "apyBucket": 80,
        "startDate": 1606751503,
        "endDate": 1606751503
      },
      {
        "apyBucket": 100,
        "startDate": 1606751896,
        "endDate": 1606753322
      },
      {
        "apyBucket": 110,
        "startDate": 1606754001,
        "endDate": 1606754001
      },
      {
        "apyBucket": 100,
        "startDate": 1606754815,
        "endDate": 1606755881
      },
      {
        "apyBucket": 90,
        "startDate": 1606756531,
        "endDate": 1606757405
      },
      {
        "apyBucket": 80,
        "startDate": 1606757853,
        "endDate": 1606757853
      },
      {
        "apyBucket": 90,
        "startDate": 1606758149,
        "endDate": 1606758614
      },
      {
        "apyBucket": 100,
        "startDate": 1606758678,
        "endDate": 1606761229
      },
      {
        "apyBucket": 90,
        "startDate": 1606761229,
        "endDate": 1606761229
      },
      {
        "apyBucket": 100,
        "startDate": 1606761349,
        "endDate": 1606764701
      },
      {
        "apyBucket": 0,
        "startDate": 1606764899,
        "endDate": 1606764899
      },
      {
        "apyBucket": 100,
        "startDate": 1606764899,
        "endDate": 1606764899
      },
      {
        "apyBucket": 0,
        "startDate": 1606765048,
        "endDate": 1606776019
      },
      {
        "apyBucket": 10,
        "startDate": 1606777386,
        "endDate": 1606777386
      },
      {
        "apyBucket": 110,
        "startDate": 1606777504,
        "endDate": 1606777504
      },
      {
        "apyBucket": 100,
        "startDate": 1606778757,
        "endDate": 1606778757
      },
      {
        "apyBucket": 80,
        "startDate": 1606779045,
        "endDate": 1606779045
      },
      {
        "apyBucket": 90,
        "startDate": 1606779630,
        "endDate": 1606780183
      },
      {
        "apyBucket": 80,
        "startDate": 1606782795,
        "endDate": 1606790188
      },
      {
        "apyBucket": 90,
        "startDate": 1606790221,
        "endDate": 1606791957
      },
      {
        "apyBucket": 80,
        "startDate": 1606792187,
        "endDate": 1606792907
      },
      {
        "apyBucket": 90,
        "startDate": 1606793717,
        "endDate": 1606798265
      },
      {
        "apyBucket": 100,
        "startDate": 1606798269,
        "endDate": 1606799476
      },
      {
        "apyBucket": 90,
        "startDate": 1606800024,
        "endDate": 1606801576
      },
      {
        "apyBucket": 100,
        "startDate": 1606801584,
        "endDate": 1606805972
      },
      {
        "apyBucket": 90,
        "startDate": 1606806309,
        "endDate": 1606806309
      },
      {
        "apyBucket": 80,
        "startDate": 1606806718,
        "endDate": 1606806718
      },
      {
        "apyBucket": 70,
        "startDate": 1606806793,
        "endDate": 1606806793
      },
      {
        "apyBucket": 80,
        "startDate": 1606806902,
        "endDate": 1606807395
      },
      {
        "apyBucket": 90,
        "startDate": 1606807668,
        "endDate": 1606807668
      },
      {
        "apyBucket": 100,
        "startDate": 1606807739,
        "endDate": 1606814019
      },
      {
        "apyBucket": 80,
        "startDate": 1606814038,
        "endDate": 1606814324
      },
      {
        "apyBucket": 100,
        "startDate": 1606814576,
        "endDate": 1606814576
      },
      {
        "apyBucket": 90,
        "startDate": 1606814729,
        "endDate": 1606816271
      },
      {
        "apyBucket": 100,
        "startDate": 1606817255,
        "endDate": 1606823739
      },
      {
        "apyBucket": 90,
        "startDate": 1606824364,
        "endDate": 1606824387
      },
      {
        "apyBucket": 100,
        "startDate": 1606824499,
        "endDate": 1606831550
      },
      {
        "apyBucket": 90,
        "startDate": 1606831555,
        "endDate": 1606831555
      },
      {
        "apyBucket": 60,
        "startDate": 1606832580,
        "endDate": 1606832580
      },
      {
        "apyBucket": 80,
        "startDate": 1606832601,
        "endDate": 1606835052
      },
      {
        "apyBucket": 70,
        "startDate": 1606835464,
        "endDate": 1606836793
      },
      {
        "apyBucket": 100,
        "startDate": 1606836813,
        "endDate": 1606837085
      },
      {
        "apyBucket": 90,
        "startDate": 1606838059,
        "endDate": 1606838059
      },
      {
        "apyBucket": 100,
        "startDate": 1606838563,
        "endDate": 1606838563
      },
      {
        "apyBucket": 90,
        "startDate": 1606841621,
        "endDate": 1606845975
      },
      {
        "apyBucket": 80,
        "startDate": 1606846378,
        "endDate": 1606853412
      },
      {
        "apyBucket": 70,
        "startDate": 1606853465,
        "endDate": 1606858136
      },
      {
        "apyBucket": 60,
        "startDate": 1606858195,
        "endDate": 1606866537
      },
      {
        "apyBucket": 50,
        "startDate": 1606866823,
        "endDate": 1606866823
      },
      {
        "apyBucket": 60,
        "startDate": 1606868542,
        "endDate": 1606868542
      },
      {
        "apyBucket": 50,
        "startDate": 1606869367,
        "endDate": 1606870545
      },
      {
        "apyBucket": 40,
        "startDate": 1606872687,
        "endDate": 1606872943
      },
      {
        "apyBucket": 30,
        "startDate": 1606873832,
        "endDate": 1606875898
      },
      {
        "apyBucket": 20,
        "startDate": 1606877373,
        "endDate": 1606877373
      },
      {
        "apyBucket": 30,
        "startDate": 1606877725,
        "endDate": 1606878056
      },
      {
        "apyBucket": 20,
        "startDate": 1606879945,
        "endDate": 1606881194
      },
      {
        "apyBucket": 30,
        "startDate": 1606882631,
        "endDate": 1606903733
      },
      {
        "apyBucket": 20,
        "startDate": 1606904194,
        "endDate": 1606907601
      },
      {
        "apyBucket": 30,
        "startDate": 1606908601,
        "endDate": 1606908986
      },
      {
        "apyBucket": 40,
        "startDate": 1606911066,
        "endDate": 1606912135
      },
      {
        "apyBucket": 50,
        "startDate": 1606912530,
        "endDate": 1606912530
      },
      {
        "apyBucket": 40,
        "startDate": 1606912723,
        "endDate": 1606912723
      },
      {
        "apyBucket": 50,
        "startDate": 1606913464,
        "endDate": 1606913847
      },
      {
        "apyBucket": 30,
        "startDate": 1606914049,
        "endDate": 1606920830
      },
      {
        "apyBucket": 20,
        "startDate": 1606921159,
        "endDate": 1606931561
      },
      {
        "apyBucket": 10,
        "startDate": 1606935021,
        "endDate": 1606935021
      },
      {
        "apyBucket": 30,
        "startDate": 1606935687,
        "endDate": 1606935687
      },
      {
        "apyBucket": 50,
        "startDate": 1606936281,
        "endDate": 1606939381
      },
      {
        "apyBucket": 40,
        "startDate": 1606939405,
        "endDate": 1606949310
      },
      {
        "apyBucket": 60,
        "startDate": 1606949861,
        "endDate": 1606949861
      },
      {
        "apyBucket": 40,
        "startDate": 1606949869,
        "endDate": 1606952208
      },
      {
        "apyBucket": 20,
        "startDate": 1606952320,
        "endDate": 1606952320
      },
      {
        "apyBucket": 30,
        "startDate": 1606952582,
        "endDate": 1606956306
      },
      {
        "apyBucket": 20,
        "startDate": 1606956952,
        "endDate": 1606960175
      },
      {
        "apyBucket": 10,
        "startDate": 1606961645,
        "endDate": 1606968755
      },
      {
        "apyBucket": 20,
        "startDate": 1606971061,
        "endDate": 1606972045
      },
      {
        "apyBucket": 90,
        "startDate": 1606972179,
        "endDate": 1606972179
      },
      {
        "apyBucket": 20,
        "startDate": 1606972357,
        "endDate": 1606974631
      },
      {
        "apyBucket": 10,
        "startDate": 1606975569,
        "endDate": 1606978249
      },
      {
        "apyBucket": 40,
        "startDate": 1606980233,
        "endDate": 1606984975
      },
      {
        "apyBucket": 10,
        "startDate": 1606985474,
        "endDate": 1606985474
      },
      {
        "apyBucket": 20,
        "startDate": 1606987981,
        "endDate": 1607002514
      },
      {
        "apyBucket": 30,
        "startDate": 1607002718,
        "endDate": 1607013257
      },
      {
        "apyBucket": 20,
        "startDate": 1607013452,
        "endDate": 1607013534
      },
      {
        "apyBucket": 10,
        "startDate": 1607014276,
        "endDate": 1607014276
      },
      {
        "apyBucket": 20,
        "startDate": 1607016311,
        "endDate": 1607016311
      },
      {
        "apyBucket": 10,
        "startDate": 1607017093,
        "endDate": 1607018753
      },
      {
        "apyBucket": 20,
        "startDate": 1607024548,
        "endDate": 1607024548
      },
      {
        "apyBucket": 10,
        "startDate": 1607027331,
        "endDate": 1607027331
      },
      {
        "apyBucket": 0,
        "startDate": 1607029000,
        "endDate": 1607044584
      },
      {
        "apyBucket": 10,
        "startDate": 1607044589,
        "endDate": 1607046031
      },
      {
        "apyBucket": 20,
        "startDate": 1607046404,
        "endDate": 1607046404
      },
      {
        "apyBucket": 30,
        "startDate": 1607047007,
        "endDate": 1607047007
      },
      {
        "apyBucket": 40,
        "startDate": 1607051827,
        "endDate": 1607051827
      },
      {
        "apyBucket": 70,
        "startDate": 1607052635,
        "endDate": 1607054545
      },
      {
        "apyBucket": 60,
        "startDate": 1607055927,
        "endDate": 1607056458
      },
      {
        "apyBucket": 30,
        "startDate": 1607058302,
        "endDate": 1607058784
      },
      {
        "apyBucket": 0,
        "startDate": 1607058867,
        "endDate": 1607058867
      },
      {
        "apyBucket": 10,
        "startDate": 1607058924,
        "endDate": 1607063095
      },
      {
        "apyBucket": 20,
        "startDate": 1607063900,
        "endDate": 1607074717
      },
      {
        "apyBucket": 10,
        "startDate": 1607074948,
        "endDate": 1607085319
      },
      {
        "apyBucket": 20,
        "startDate": 1607085520,
        "endDate": 1607086293
      },
      {
        "apyBucket": 10,
        "startDate": 1607087047,
        "endDate": 1607097202
      },
      {
        "apyBucket": 90,
        "startDate": 1607098091,
        "endDate": 1607101061
      },
      {
        "apyBucket": 40,
        "startDate": 1607101480,
        "endDate": 1607102470
      },
      {
        "apyBucket": 30,
        "startDate": 1607102534,
        "endDate": 1607102534
      },
      {
        "apyBucket": 40,
        "startDate": 1607102915,
        "endDate": 1607102915
      },
      {
        "apyBucket": 50,
        "startDate": 1607103531,
        "endDate": 1607103531
      },
      {
        "apyBucket": 40,
        "startDate": 1607103701,
        "endDate": 1607105144
      },
      {
        "apyBucket": 50,
        "startDate": 1607106080,
        "endDate": 1607114603
      },
      {
        "apyBucket": 40,
        "startDate": 1607114616,
        "endDate": 1607115630
      },
      {
        "apyBucket": 20,
        "startDate": 1607117438,
        "endDate": 1607120004
      },
      {
        "apyBucket": 30,
        "startDate": 1607120416,
        "endDate": 1607120416
      },
      {
        "apyBucket": 20,
        "startDate": 1607121686,
        "endDate": 1607125935
      },
      {
        "apyBucket": 0,
        "startDate": 1607126169,
        "endDate": 1607690778
      },
      {
        "apyBucket": 20,
        "startDate": 1607691773,
        "endDate": 1607691773
      },
      {
        "apyBucket": 0,
        "startDate": 1607692172,
        "endDate": 1607737938
      },
      {
        "apyBucket": 10,
        "startDate": 1607739210,
        "endDate": 1607740482
      },
      {
        "apyBucket": 20,
        "startDate": 1607740852,
        "endDate": 1607740852
      },
      {
        "apyBucket": 10,
        "startDate": 1607740888,
        "endDate": 1607743180
      },
      {
        "apyBucket": 0,
        "startDate": 1607747763,
        "endDate": 1607910618
      },
      {
        "apyBucket": 100,
        "startDate": 1607921825,
        "endDate": 1607921825
      },
      {
        "apyBucket": 0,
        "startDate": 1607921902,
        "endDate": 1607921902
      },
      {
        "apyBucket": 100,
        "startDate": 1607921935,
        "endDate": 1607921935
      },
      {
        "apyBucket": 0,
        "startDate": 1607922140,
        "endDate": 1607983934
      },
      {
        "apyBucket": 20,
        "startDate": 1607993002,
        "endDate": 1607993002
      },
      {
        "apyBucket": 0,
        "startDate": 1607995740,
        "endDate": 1608009887
      },
      {
        "apyBucket": 20,
        "startDate": 1608015163,
        "endDate": 1608020561
      },
      {
        "apyBucket": 10,
        "startDate": 1608022087,
        "endDate": 1608037154
      },
      {
        "apyBucket": 0,
        "startDate": 1608039352,
        "endDate": 1608059994
      },
      {
        "apyBucket": 10,
        "startDate": 1608070858,
        "endDate": 1608077940
      },
      {
        "apyBucket": 30,
        "startDate": 1608081133,
        "endDate": 1608085347
      },
      {
        "apyBucket": 40,
        "startDate": 1608090819,
        "endDate": 1608109182
      },
      {
        "apyBucket": 20,
        "startDate": 1608112369,
        "endDate": 1608122115
      },
      {
        "apyBucket": 0,
        "startDate": 1608122266,
        "endDate": 1608912988
      },
      {
        "apyBucket": 100,
        "startDate": 1608918143,
        "endDate": 1608919039
      },
      {
        "apyBucket": 0,
        "startDate": 1608919519,
        "endDate": 1608949431
      },
      {
        "apyBucket": 100,
        "startDate": 1608960753,
        "endDate": 1608970890
      },
      {
        "apyBucket": 80,
        "startDate": 1608971037,
        "endDate": 1608971037
      },
      {
        "apyBucket": 70,
        "startDate": 1608973541,
        "endDate": 1608977814
      },
      {
        "apyBucket": 40,
        "startDate": 1608978402,
        "endDate": 1608980105
      },
      {
        "apyBucket": 30,
        "startDate": 1608980967,
        "endDate": 1608980967
      },
      {
        "apyBucket": 10,
        "startDate": 1608985411,
        "endDate": 1608985411
      },
      {
        "apyBucket": 40,
        "startDate": 1608985555,
        "endDate": 1608985555
      },
      {
        "apyBucket": 10,
        "startDate": 1608985647,
        "endDate": 1609003473
      },
      {
        "apyBucket": 30,
        "startDate": 1609014248,
        "endDate": 1609021351
      },
      {
        "apyBucket": 20,
        "startDate": 1609022644,
        "endDate": 1609028351
      },
      {
        "apyBucket": 50,
        "startDate": 1609028816,
        "endDate": 1609031486
      },
      {
        "apyBucket": 40,
        "startDate": 1609036631,
        "endDate": 1609047593
      },
      {
        "apyBucket": 50,
        "startDate": 1609048656,
        "endDate": 1609048656
      },
      {
        "apyBucket": 0,
        "startDate": 1609048992,
        "endDate": 1609126552
      },
      {
        "apyBucket": 20,
        "startDate": 1609128239,
        "endDate": 1609128239
      },
      {
        "apyBucket": 0,
        "startDate": 1609129089,
        "endDate": 1609146574
      },
      {
        "apyBucket": 70,
        "startDate": 1609146906,
        "endDate": 1609146906
      },
      {
        "apyBucket": 0,
        "startDate": 1609148332,
        "endDate": 1609191476
      },
      {
        "apyBucket": 40,
        "startDate": 1609198184,
        "endDate": 1609198184
      },
      {
        "apyBucket": 10,
        "startDate": 1609198453,
        "endDate": 1609209656
      },
      {
        "apyBucket": 0,
        "startDate": 1609217631,
        "endDate": 1609237798
      },
      {
        "apyBucket": 110,
        "startDate": 1609237913,
        "endDate": 1609237913
      },
      {
        "apyBucket": 0,
        "startDate": 1609237975,
        "endDate": 1609246034
      },
      {
        "apyBucket": 100,
        "startDate": 1609254631,
        "endDate": 1609254631
      },
      {
        "apyBucket": 0,
        "startDate": 1609254789,
        "endDate": 1609269227
      },
      {
        "apyBucket": 10,
        "startDate": 1609273068,
        "endDate": 1609282803
      },
      {
        "apyBucket": 100,
        "startDate": 1609290481,
        "endDate": 1609290481
      },
      {
        "apyBucket": 40,
        "startDate": 1609291005,
        "endDate": 1609291005
      },
      {
        "apyBucket": 20,
        "startDate": 1609292003,
        "endDate": 1609292003
      },
      {
        "apyBucket": 60,
        "startDate": 1609292955,
        "endDate": 1609292955
      },
      {
        "apyBucket": 90,
        "startDate": 1609293012,
        "endDate": 1609293181
      },
      {
        "apyBucket": 100,
        "startDate": 1609293736,
        "endDate": 1609293736
      },
      {
        "apyBucket": 40,
        "startDate": 1609295696,
        "endDate": 1609295788
      },
      {
        "apyBucket": 90,
        "startDate": 1609295953,
        "endDate": 1609295953
      },
      {
        "apyBucket": 100,
        "startDate": 1609296441,
        "endDate": 1609298696
      },
      {
        "apyBucket": 80,
        "startDate": 1609301908,
        "endDate": 1609301908
      },
      {
        "apyBucket": 70,
        "startDate": 1609301921,
        "endDate": 1609301921
      },
      {
        "apyBucket": 80,
        "startDate": 1609302547,
        "endDate": 1609302861
      },
      {
        "apyBucket": 100,
        "startDate": 1609302866,
        "endDate": 1609303447
      },
      {
        "apyBucket": 30,
        "startDate": 1609304744,
        "endDate": 1609305366
      },
      {
        "apyBucket": 100,
        "startDate": 1609306095,
        "endDate": 1609310562
      },
      {
        "apyBucket": 80,
        "startDate": 1609310583,
        "endDate": 1609310650
      },
      {
        "apyBucket": 100,
        "startDate": 1609312343,
        "endDate": 1609315690
      },
      {
        "apyBucket": 110,
        "startDate": 1609316606,
        "endDate": 1609316606
      },
      {
        "apyBucket": 100,
        "startDate": 1609316700,
        "endDate": 1609319242
      },
      {
        "apyBucket": 30,
        "startDate": 1609320005,
        "endDate": 1609320005
      },
      {
        "apyBucket": 110,
        "startDate": 1609321064,
        "endDate": 1609321064
      },
      {
        "apyBucket": 100,
        "startDate": 1609321492,
        "endDate": 1609328067
      },
      {
        "apyBucket": 70,
        "startDate": 1609328242,
        "endDate": 1609328242
      },
      {
        "apyBucket": 60,
        "startDate": 1609332133,
        "endDate": 1609332133
      },
      {
        "apyBucket": 100,
        "startDate": 1609333714,
        "endDate": 1609333851
      },
      {
        "apyBucket": 90,
        "startDate": 1609334776,
        "endDate": 1609336113
      },
      {
        "apyBucket": 100,
        "startDate": 1609336423,
        "endDate": 1609336423
      },
      {
        "apyBucket": 90,
        "startDate": 1609339808,
        "endDate": 1609340030
      },
      {
        "apyBucket": 70,
        "startDate": 1609340115,
        "endDate": 1609340793
      },
      {
        "apyBucket": 100,
        "startDate": 1609341952,
        "endDate": 1609346063
      },
      {
        "apyBucket": 110,
        "startDate": 1609347378,
        "endDate": 1609347378
      },
      {
        "apyBucket": 100,
        "startDate": 1609347699,
        "endDate": 1609347699
      },
      {
        "apyBucket": 50,
        "startDate": 1609349107,
        "endDate": 1609349207
      },
      {
        "apyBucket": 40,
        "startDate": 1609349290,
        "endDate": 1609351550
      },
      {
        "apyBucket": 60,
        "startDate": 1609351914,
        "endDate": 1609360050
      },
      {
        "apyBucket": 110,
        "startDate": 1609360168,
        "endDate": 1609360168
      },
      {
        "apyBucket": 100,
        "startDate": 1609364064,
        "endDate": 1609365980
      },
      {
        "apyBucket": 70,
        "startDate": 1609367855,
        "endDate": 1609367855
      },
      {
        "apyBucket": 110,
        "startDate": 1609370398,
        "endDate": 1609370398
      },
      {
        "apyBucket": 100,
        "startDate": 1609371552,
        "endDate": 1609382997
      },
      {
        "apyBucket": 90,
        "startDate": 1609384612,
        "endDate": 1609384612
      },
      {
        "apyBucket": 40,
        "startDate": 1609386480,
        "endDate": 1609386480
      },
      {
        "apyBucket": 60,
        "startDate": 1609387216,
        "endDate": 1609388713
      },
      {
        "apyBucket": 100,
        "startDate": 1609391052,
        "endDate": 1609393229
      },
      {
        "apyBucket": 90,
        "startDate": 1609397607,
        "endDate": 1609397607
      },
      {
        "apyBucket": 0,
        "startDate": 1609398296,
        "endDate": 1609403195
      },
      {
        "apyBucket": 30,
        "startDate": 1609405420,
        "endDate": 1609405420
      },
      {
        "apyBucket": 50,
        "startDate": 1609405751,
        "endDate": 1609410235
      },
      {
        "apyBucket": 40,
        "startDate": 1609410266,
        "endDate": 1609420350
      },
      {
        "apyBucket": 80,
        "startDate": 1609422890,
        "endDate": 1609423778
      },
      {
        "apyBucket": 70,
        "startDate": 1609426247,
        "endDate": 1609426247
      },
      {
        "apyBucket": 80,
        "startDate": 1609427386,
        "endDate": 1609431065
      },
      {
        "apyBucket": 60,
        "startDate": 1609434311,
        "endDate": 1609435031
      },
      {
        "apyBucket": 100,
        "startDate": 1609435670,
        "endDate": 1609437762
      },
      {
        "apyBucket": 90,
        "startDate": 1609439219,
        "endDate": 1609442026
      },
      {
        "apyBucket": 80,
        "startDate": 1609442264,
        "endDate": 1609466935
      },
      {
        "apyBucket": 70,
        "startDate": 1609469272,
        "endDate": 1609469272
      },
      {
        "apyBucket": 100,
        "startDate": 1609477417,
        "endDate": 1609489043
      },
      {
        "apyBucket": 0,
        "startDate": 1609490430,
        "endDate": 1609506665
      },
      {
        "apyBucket": 10,
        "startDate": 1609506801,
        "endDate": 1609506801
      },
      {
        "apyBucket": 60,
        "startDate": 1609506917,
        "endDate": 1609506917
      },
      {
        "apyBucket": 80,
        "startDate": 1609507366,
        "endDate": 1609507828
      },
      {
        "apyBucket": 60,
        "startDate": 1609508049,
        "endDate": 1609508071
      },
      {
        "apyBucket": 70,
        "startDate": 1609508370,
        "endDate": 1609512160
      },
      {
        "apyBucket": 60,
        "startDate": 1609512551,
        "endDate": 1609512551
      },
      {
        "apyBucket": 70,
        "startDate": 1609514333,
        "endDate": 1609514419
      },
      {
        "apyBucket": 80,
        "startDate": 1609514581,
        "endDate": 1609514581
      },
      {
        "apyBucket": 110,
        "startDate": 1609515404,
        "endDate": 1609515404
      },
      {
        "apyBucket": 100,
        "startDate": 1609515938,
        "endDate": 1609515938
      },
      {
        "apyBucket": 40,
        "startDate": 1609516891,
        "endDate": 1609516891
      },
      {
        "apyBucket": 110,
        "startDate": 1609517190,
        "endDate": 1609517190
      },
      {
        "apyBucket": 80,
        "startDate": 1609517857,
        "endDate": 1609521343
      },
      {
        "apyBucket": 50,
        "startDate": 1609522036,
        "endDate": 1609522036
      },
      {
        "apyBucket": 60,
        "startDate": 1609522067,
        "endDate": 1609524667
      },
      {
        "apyBucket": 50,
        "startDate": 1609525443,
        "endDate": 1609526778
      },
      {
        "apyBucket": 80,
        "startDate": 1609529209,
        "endDate": 1609531414
      },
      {
        "apyBucket": 70,
        "startDate": 1609532180,
        "endDate": 1609539247
      },
      {
        "apyBucket": 90,
        "startDate": 1609539247,
        "endDate": 1609539599
      },
      {
        "apyBucket": 100,
        "startDate": 1609539880,
        "endDate": 1609548685
      },
      {
        "apyBucket": 90,
        "startDate": 1609551060,
        "endDate": 1609551060
      },
      {
        "apyBucket": 80,
        "startDate": 1609551252,
        "endDate": 1609563898
      },
      {
        "apyBucket": 70,
        "startDate": 1609564730,
        "endDate": 1609564730
      },
      {
        "apyBucket": 50,
        "startDate": 1609565805,
        "endDate": 1609565805
      },
      {
        "apyBucket": 30,
        "startDate": 1609568548,
        "endDate": 1609568548
      },
      {
        "apyBucket": 40,
        "startDate": 1609572260,
        "endDate": 1609575439
      },
      {
        "apyBucket": 20,
        "startDate": 1609576732,
        "endDate": 1609576732
      },
      {
        "apyBucket": 30,
        "startDate": 1609577005,
        "endDate": 1609581550
      },
      {
        "apyBucket": 20,
        "startDate": 1609585228,
        "endDate": 1609585228
      },
      {
        "apyBucket": 10,
        "startDate": 1609587912,
        "endDate": 1609587912
      },
      {
        "apyBucket": 20,
        "startDate": 1609589068,
        "endDate": 1609591689
      },
      {
        "apyBucket": 60,
        "startDate": 1609592205,
        "endDate": 1609598152
      },
      {
        "apyBucket": 50,
        "startDate": 1609601796,
        "endDate": 1609601796
      },
      {
        "apyBucket": 30,
        "startDate": 1609604355,
        "endDate": 1609604355
      },
      {
        "apyBucket": 20,
        "startDate": 1609604953,
        "endDate": 1609605151
      },
      {
        "apyBucket": 0,
        "startDate": 1609608050,
        "endDate": 1609616267
      },
      {
        "apyBucket": 10,
        "startDate": 1609616469,
        "endDate": 1609616469
      },
      {
        "apyBucket": 90,
        "startDate": 1609617712,
        "endDate": 1609623807
      },
      {
        "apyBucket": 80,
        "startDate": 1609625220,
        "endDate": 1609626993
      },
      {
        "apyBucket": 70,
        "startDate": 1609628652,
        "endDate": 1609639795
      },
      {
        "apyBucket": 60,
        "startDate": 1609640087,
        "endDate": 1609640087
      },
      {
        "apyBucket": 70,
        "startDate": 1609640876,
        "endDate": 1609640876
      },
      {
        "apyBucket": 60,
        "startDate": 1609641490,
        "endDate": 1609654069
      },
      {
        "apyBucket": 90,
        "startDate": 1609658298,
        "endDate": 1609659991
      },
      {
        "apyBucket": 70,
        "startDate": 1609661104,
        "endDate": 1609666352
      },
      {
        "apyBucket": 100,
        "startDate": 1609666888,
        "endDate": 1609668960
      },
      {
        "apyBucket": 60,
        "startDate": 1609670028,
        "endDate": 1609673232
      },
      {
        "apyBucket": 110,
        "startDate": 1609675087,
        "endDate": 1609675087
      },
      {
        "apyBucket": 100,
        "startDate": 1609676400,
        "endDate": 1609676400
      },
      {
        "apyBucket": 90,
        "startDate": 1609677438,
        "endDate": 1609689326
      },
      {
        "apyBucket": 80,
        "startDate": 1609694812,
        "endDate": 1609710515
      },
      {
        "apyBucket": 70,
        "startDate": 1609710654,
        "endDate": 1609714128
      },
      {
        "apyBucket": 0,
        "startDate": 1609715895,
        "endDate": 1609715895
      },
      {
        "apyBucket": 20,
        "startDate": 1609717199,
        "endDate": 1609721602
      },
      {
        "apyBucket": 30,
        "startDate": 1609723144,
        "endDate": 1609723144
      },
      {
        "apyBucket": 20,
        "startDate": 1609724176,
        "endDate": 1609725480
      },
      {
        "apyBucket": 0,
        "startDate": 1609725966,
        "endDate": 1610301585
      },
      {
        "apyBucket": 10,
        "startDate": 1610303641,
        "endDate": 1610327047
      },
      {
        "apyBucket": 0,
        "startDate": 1610337608,
        "endDate": 1610375425
      },
      {
        "apyBucket": 10,
        "startDate": 1610376726,
        "endDate": 1610376726
      },
      {
        "apyBucket": 0,
        "startDate": 1610391353,
        "endDate": 1610396043
      },
      {
        "apyBucket": 10,
        "startDate": 1610396602,
        "endDate": 1610411733
      },
      {
        "apyBucket": 0,
        "startDate": 1610416273,
        "endDate": 1610426692
      },
      {
        "apyBucket": 10,
        "startDate": 1610427448,
        "endDate": 1610431501
      },
      {
        "apyBucket": 20,
        "startDate": 1610432097,
        "endDate": 1610433899
      },
      {
        "apyBucket": 10,
        "startDate": 1610434059,
        "endDate": 1610449312
      },
      {
        "apyBucket": 0,
        "startDate": 1610452573,
        "endDate": 1610502527
      },
      {
        "apyBucket": 10,
        "startDate": 1610507042,
        "endDate": 1610509766
      },
      {
        "apyBucket": 0,
        "startDate": 1610513297,
        "endDate": 1610513297
      },
      {
        "apyBucket": 10,
        "startDate": 1610518066,
        "endDate": 1610566784
      },
      {
        "apyBucket": 0,
        "startDate": 1610570493,
        "endDate": 1610606650
      },
      {
        "apyBucket": 10,
        "startDate": 1610607442,
        "endDate": 1610608925
      },
      {
        "apyBucket": 40,
        "startDate": 1610610469,
        "endDate": 1610613650
      },
      {
        "apyBucket": 30,
        "startDate": 1610613868,
        "endDate": 1610614096
      },
      {
        "apyBucket": 40,
        "startDate": 1610614877,
        "endDate": 1610617951
      },
      {
        "apyBucket": 10,
        "startDate": 1610623131,
        "endDate": 1610623427
      },
      {
        "apyBucket": 0,
        "startDate": 1610623842,
        "endDate": 1610739544
      },
      {
        "apyBucket": 80,
        "startDate": 1610742740,
        "endDate": 1610743818
      },
      {
        "apyBucket": 70,
        "startDate": 1610745149,
        "endDate": 1610748483
      },
      {
        "apyBucket": 40,
        "startDate": 1610749200,
        "endDate": 1610749200
      },
      {
        "apyBucket": 0,
        "startDate": 1610749210,
        "endDate": 1610986332
      },
      {
        "apyBucket": 100,
        "startDate": 1610987335,
        "endDate": 1610988361
      },
      {
        "apyBucket": 90,
        "startDate": 1610991122,
        "endDate": 1610991122
      },
      {
        "apyBucket": 80,
        "startDate": 1610991462,
        "endDate": 1610992093
      },
      {
        "apyBucket": 70,
        "startDate": 1610993582,
        "endDate": 1611002508
      },
      {
        "apyBucket": 60,
        "startDate": 1611004537,
        "endDate": 1611009420
      },
      {
        "apyBucket": 50,
        "startDate": 1611010768,
        "endDate": 1611023753
      },
      {
        "apyBucket": 30,
        "startDate": 1611026821,
        "endDate": 1611026821
      },
      {
        "apyBucket": 10,
        "startDate": 1611027054,
        "endDate": 1611027448
      },
      {
        "apyBucket": 20,
        "startDate": 1611028597,
        "endDate": 1611041245
      },
      {
        "apyBucket": 10,
        "startDate": 1611049935,
        "endDate": 1611052689
      },
      {
        "apyBucket": 20,
        "startDate": 1611062183,
        "endDate": 1611062183
      },
      {
        "apyBucket": 10,
        "startDate": 1611065368,
        "endDate": 1611069214
      },
      {
        "apyBucket": 0,
        "startDate": 1611072669,
        "endDate": 1611090494
      },
      {
        "apyBucket": 10,
        "startDate": 1611091049,
        "endDate": 1611134246
      },
      {
        "apyBucket": 20,
        "startDate": 1611134679,
        "endDate": 1611134679
      },
      {
        "apyBucket": 50,
        "startDate": 1611135763,
        "endDate": 1611138303
      },
      {
        "apyBucket": 10,
        "startDate": 1611138577,
        "endDate": 1611138577
      },
      {
        "apyBucket": 20,
        "startDate": 1611138577,
        "endDate": 1611138577
      },
      {
        "apyBucket": 10,
        "startDate": 1611139052,
        "endDate": 1611159818
      },
      {
        "apyBucket": 0,
        "startDate": 1611159895,
        "endDate": 1611166511
      },
      {
        "apyBucket": 10,
        "startDate": 1611169046,
        "endDate": 1611175933
      },
      {
        "apyBucket": 20,
        "startDate": 1611179201,
        "endDate": 1611223979
      },
      {
        "apyBucket": 10,
        "startDate": 1611224246,
        "endDate": 1611259034
      },
      {
        "apyBucket": 0,
        "startDate": 1611263188,
        "endDate": 1611293537
      },
      {
        "apyBucket": 10,
        "startDate": 1611304239,
        "endDate": 1611350854
      },
      {
        "apyBucket": 60,
        "startDate": 1611351006,
        "endDate": 1611351006
      },
      {
        "apyBucket": 10,
        "startDate": 1611351131,
        "endDate": 1611351131
      },
      {
        "apyBucket": 0,
        "startDate": 1611352161,
        "endDate": 1611426736
      },
      {
        "apyBucket": 10,
        "startDate": 1611437176,
        "endDate": 1611437176
      },
      {
        "apyBucket": 20,
        "startDate": 1611438899,
        "endDate": 1611443120
      },
      {
        "apyBucket": 40,
        "startDate": 1611448576,
        "endDate": 1611452491
      },
      {
        "apyBucket": 20,
        "startDate": 1611452774,
        "endDate": 1611459413
      },
      {
        "apyBucket": 10,
        "startDate": 1611462226,
        "endDate": 1611469482
      },
      {
        "apyBucket": 20,
        "startDate": 1611469753,
        "endDate": 1611469753
      },
      {
        "apyBucket": 10,
        "startDate": 1611470615,
        "endDate": 1611470615
      },
      {
        "apyBucket": 30,
        "startDate": 1611476727,
        "endDate": 1611492294
      }
    ]
  }
]

const crabMonkeyAlt = 'Japanese \n' +
  'Keisai Eisen 渓斎英泉, 1790–1848 \n' +
  'Monkey and CrabEdo period, 1615–1868 \n' +
  'Woodblock print (surimono); ink and color on paper \n' +
  '19.8 x 17.2 cm. (7 13/16 x 6 3/4 in.)\n' +
  'mat: 49.1 x 36.2 cm. (19 5/16 x 14 1/4 in.) \n' +
  'Princeton University Art Museum. Gift of Mr. and Mrs. Jerome Straka \n'

export const App = () => {
  const [active, setActive] = useState('')
  const [loader, setLoader] = useState(true)
  const [account, setAccount] = useState<string | undefined>()
  const [balances, setBalances] = useState<undefined|any[]>()

  window.ethereum.on('accountsChanged', (accounts: any) => {
    if (Date.now() - lastMove > 1000) {
      lastMove = Date.now()
      if (accounts.length === 0) {
        setAccount(undefined)
      } else {
        fetchData()
        setAccount(window.ethereum.selectedAddress)
      }
    }
  })

  function fetchData() {
    setLoader(true)
    fetch(`http://159.89.3.75:8080/idle/${window.ethereum.selectedAddress}`)
      .then(res => res.json())
      .then(balances => {
        return balances.map((balance: any) => {
          let nonZeroMissingRates = 0
          return {
            asset: balance.token,
            percentage: balance.ratesOfBalances.reduce((acc: number, curr: any) => {
              curr.missingRate !== 0 && nonZeroMissingRates++
              return curr.missingRate !== 0 ? curr.missingRate + acc : acc
            }, 0) / (nonZeroMissingRates || 1) * 100,
            usd: balance.ratesOfBalances.reduce((acc: number, curr: any) => curr.tokensMissing ? curr.tokensMissing + acc : acc, 0),
            totalIdleTime: balance.ratesOfBalances.reduce((acc: number, curr: any) => curr.timeIdle ? curr.timeIdle + acc : acc, 0)
          }
        })
      })
      .then(balances => {
        setBalances(balances)
        setLoader(false)
      })
  }

  useEffect(() => {
    setTimeout(() => {
      setAccount(window.ethereum.selectedAddress)
      setLoader(true)
      fetchData()
      console.log(window.ethereum.selectedAddress)
      if (!window.ethereum.selectedAddress) setLoader(false)

    }, 1000);
  }, [account])

  const ethEnabled = useCallback(async () => {
    if (account) return
    setLoader(true)
    await window.ethereum.send('eth_requestAccounts')
    setTimeout(() => {
      setAccount(window.ethereum.selectedAddress)
      setLoader(false)
      fetchData()
    }, 1000)
  }, [account])

  return (
    <div className='App' style={{ opacity: loader ? .3 : 1, transition: 'opacity 100ms ease-in-out' }}>
      <div style={{
        justifyContent: 'flex-end',
        display: 'none',
        width: '200px',
        position: 'absolute',
        overflow: 'hidden',
        borderRadius: '50%'
      }}>
        <img alt={crabMonkeyAlt} src={CrabMonkey} width='500px' height='auto'/>
      </div>
      {loader && <Loader/>}
      <Header ethEnabled={ethEnabled} account={account}/>
      <Table balances={balances} active={active} setActive={setActive} />
    </div>
  )
}
