#-*- coding:utf-8 -*-
import json
from konlpy.tag import Hannanum
hannanum = Hannanum()

texts = json.loads(open('input.json', 'rt', encoding='UTF8').read())
extractedNouns = set([])

for text in texts :
  nouns = hannanum.nouns(text)
  for noun in nouns :
    extractedNouns.add(noun)

extractedNouns = list(extractedNouns)

with open('./output.json', 'w', encoding='utf-8') as makefile :
  json.dump(extractedNouns, makefile, ensure_ascii=False, indent="\t")