#-*- coding:utf-8 -*-
import json
import os
from konlpy.tag import Hannanum
hannanum = Hannanum()

dirname = os.path.dirname(__file__)
inputPath = os.path.join(dirname, 'input.json')
outputPath = os.path.join(dirname, 'output.json')

texts = json.loads(open(inputPath, 'rt', encoding='UTF8').read())
extractedNouns = set([])

for text in texts :
  nouns = hannanum.nouns(text)
  for noun in nouns :
    extractedNouns.add(noun)

extractedNouns = list(extractedNouns)

with open(outputPath, 'w', encoding='utf-8') as makefile :
  json.dump(extractedNouns, makefile, ensure_ascii=False, indent="\t")