from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .utils.Shell import Shell
from .utilities import get_abc_result_line

# Create your views here.
@csrf_exempt
def abc(request):
    req = json.loads(request.body) 
    shell = Shell()
    #Store input smt into a file for ABC
    f = open("input.smt2", "w")
    f.write(req['input'])
    f.close()
    
    #Formulate abc call
    cmd = 'abc -i input.smt2 -v 0 '
    for x in req['args']:
        cmd = cmd + x + ' ' + req['args'][x] + ' '
    
    #Run abc
    out, err = shell.runcmd(cmd)
    print(err)
    #return HttpResponse(out,err)
    result = get_abc_result_line(out,err)

    return JsonResponse(json.dumps(result), safe=False)
