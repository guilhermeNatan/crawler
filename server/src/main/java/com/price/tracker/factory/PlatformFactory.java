package com.price.tracker.factory;

import com.price.tracker.entity.Platform;
import com.price.tracker.entity.PlatformEnum;
import com.price.tracker.repository.PlatformRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class PlatformFactory extends BaseFactory<Platform> {
    @Autowired
    private PlatformRepo platformRepo;

    @Override
    public Platform createToTest(boolean save) {
        return create(save, PlatformEnum.PLAYSTATION_4);
    }

    public Platform create(boolean save, PlatformEnum name) {
        Optional<Platform> platformWrapper = platformRepo.findFirstByName(name);
        if(!platformWrapper.isPresent()) {
            Platform platform = new Platform();
            platform.setName(name);
            if(save) {
                return platformRepo.save(platform);
            }
            return platform;
        }
        return platformWrapper.get();
    }


}
